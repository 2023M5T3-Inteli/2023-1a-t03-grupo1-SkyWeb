import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { verifyAllAplyeds } from './scripts/funcs';

import { ModelSelect } from '../../models/modelSelect';
import { ModelDelete } from '../../models/modelDelete';
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.LOGIN,
        pass: process.env.PASS,
    },
});

@Injectable()
export class ServiceAcceptApplyUser {
    constructor(
        private readonly modelDelete: ModelDelete,
        private readonly modelSelect: ModelSelect,
    ) {}

    async execute(
        idOwnerProject: number,
        idUsers: number[],
        idProject: number,
    ) {
        // futuros:
        // TODO validar sé está escolhendo a quantidade certa de pessoas para as vagas

        const project = await this.modelSelect.findProjectById(idProject);

        if (project) {
            const { isApproved, idUser } = project;

            if (isApproved == false || isApproved == null) {
                throw new HttpException(
                    {
                        status: HttpStatus.UNAUTHORIZED,
                        error: 'this project do not have a permission',
                    },
                    HttpStatus.UNAUTHORIZED,
                );
            }

            console.log(idUser)
            if (idUser != idOwnerProject) {
                throw new HttpException(
                    {
                        status: HttpStatus.UNAUTHORIZED,
                        error: 'you do not have a permission for this action',
                    },
                    HttpStatus.UNAUTHORIZED,
                );
            }

            const validateAllApplyerExists = await verifyAllAplyeds(
                idUsers,
                idProject,
                this.modelSelect,
            );

            if (!validateAllApplyerExists) {
                throw new HttpException(
                    {
                        status: HttpStatus.BAD_REQUEST,
                        error: 'Some data is wrong, do a refresh please',
                    },
                    HttpStatus.BAD_REQUEST,
                );
            }
        } else {
            throw new HttpException(
                {
                    status: HttpStatus.NOT_FOUND,
                    error: 'this project don"t exist',
                },
                HttpStatus.NOT_FOUND,
            );
        }
        
        const ApprovedsInfo = await this.modelSelect.findUserApprovedInfo(
            idUsers,
            idProject,
        );

        const fullName = ApprovedsInfo.map((item) => {
            return item.fullname;
        });
        const email = ApprovedsInfo.map((item) => {
            return item.email;
        });
        const projectName = ApprovedsInfo[0].projectName;
        console.log(fullName);
        console.log(email);
        console.log(projectName);
        ApprovedsInfo.map((val) => {
            const messageApproved = {
                from: '"SkyWeb 👻" <inteliskyweb@gmail.com>', // sender address
                to: val.email, // list of receivers
                subject: 'Project Approved ✔', // Subject line
                text: 'Hello world?', // plain text body
                html: `<b>Hello ${val.fullname}, your were approved in the project ${val.projectName} that you applied, visit "dell heroes website link" to see the details.</b>`, // html body
            };
            let mailsent = transporter.sendMail(messageApproved);
            return mailsent;
        });
        


        const result = await this.modelDelete.deleteUsersApplyProject(
            idUsers,
            idProject,
        );
        return result;
    }
}
