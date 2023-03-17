const nodemailer = require("nodemailer");
import { Injectable } from '@nestjs/common';

import { ModelUpdate } from '../../models/modelsUpdate';
import { ModelSelect } from '../../models/modelSelect';

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
export class ServiceUpdateApprovalProject {
    constructor(private modelUpdate: ModelUpdate, private modelSelect:ModelSelect) {}

    async execute(idManager: number, idProject: number, isAproved: boolean) {
        const result = await this.modelUpdate.updateApprovalProject(
            isAproved,
            idProject,
        );

        const leaderInfo = await this.modelSelect.findLeaderEmailByIdProject(
            idProject,
        );
        
        const email = leaderInfo.map((item) => {
            return item.email;
        });
        const fullName = leaderInfo.map((item) => {
            return item.fullName;
        });
        const projectName = leaderInfo.map((item) => {
            return item.name;
        });

        

        if (isAproved == true) {
            const messageApproved = {
                from: '"SkyWeb 👻" <inteliskyweb@gmail.com>', // sender address
                to: "daniel_desc@outlook.com", // list of receivers
                subject: 'Project Approved ✔', // Subject line
                text: 'Hello world?', // plain text body
                html: `<b>Hello ${fullName}, your project ${projectName} that was submitted in Dell Heroes was Approved, you may now start the selection of your project team</b>`, // html body
            };
                
            async function run() {
                let mailsent = await transporter.sendMail(messageApproved);
                return mailsent;
            };
            run();
        }
        if (isAproved == false) {
            const messageDennied = {
                from: '"SkyWeb 👻" <inteliskyweb@gmail.com>', // sender address
                to: 'daniel_desc@outlook.com', // list of receivers
                subject: 'Project Dennied', // Subject line
                text: 'Hello world?', // plain text body
                html: `<b>Hello ${fullName} unfortunately your project ${projectName} that was submitted in Dell Heroes was Dennied, you may look into it with your manager to know the details.</b>`, // html body
            };

            async function run() {
                let mailsent = await transporter.sendMail(messageDennied);
                return mailsent;
            }
            run();
        }
        return result;
    }
}
