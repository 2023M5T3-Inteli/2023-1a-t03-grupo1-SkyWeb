const nodemailer = require('nodemailer');
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
    constructor(
        private modelUpdate: ModelUpdate,
        private modelSelect: ModelSelect,
    ) {}

    async execute(idManager: number, idProject: number, isApproved: boolean) {
        const result = await this.modelUpdate.updateApprovalProject(
            isApproved,
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

        if (isApproved == true) {
            const messageApproved = {
                from: '"SkyWeb Developers - Dell Heroes" <inteliskyweb@gmail.com>', // sender address
                to: email, // list of receivers
                subject: 'Project Approved ✔', // Subject line
                text: 'Hello world?', // plain text body
                html: ` <!DOCTYPE html>
                        <html>
                        <head>
                            <meta charset="utf-8">
                            <title>Projeto aprovado Dell Heroes</title>
                            <header> <img src="https://i.pinimg.com/originals/69/40/d9/6940d928e9da1cf20d2dcd5bf5a98c33.png"></header>
                            <style>
                                body {
                                    font-family: Poppins, sans-serif;
                                    background-color: #f5f5f5;
                                    padding: 20px;
                                }
                                h1 {
                                    color: #0672CB;
                                    font-size: 24px;
                                    margin-bottom: 20px;
                                }
                                p {
                                    color: #666666;
                                    font-size: 16px;
                                    line-height: 1.5;
                                    margin-bottom: 20px;
                                }
                            </style>
                        </head>
                        <body>
                            <h1>Hello ${fullName}!</h1>
                            <p> Your project <strong> ${projectName} </strong> that was submitted in Dell Heroes was <strong> Approved </strong>, you may now start the selection of your project team. </p>
                        </body>
                        </html>
                        `,
            };

            async function run() {
                let mailsent = await transporter.sendMail(messageApproved);
                return mailsent;
            }
            run();
        }
        if (isApproved == false) {
            const messageDennied = {
                from: '"SkyWeb Developers - Dell Heroes" <inteliskyweb@gmail.com>', // sender address
                to: email, // list of receivers
                subject: 'Project Dennied', // Subject line
                text: 'Hello world?', // plain text body
                html: ` <!DOCTYPE html>
                        <html>
                        <head>
                            <meta charset="utf-8">
                            <title>Projeto aprovado Dell Heroes</title>
                            <header> <img src="https://i.pinimg.com/originals/69/40/d9/6940d928e9da1cf20d2dcd5bf5a98c33.png"></header>
                            <style>
                                body {
                                    font-family: Poppins, sans-serif;
                                    background-color: #f5f5f5;
                                    padding: 20px;
                                }
                                h1 {
                                    color: #0672CB;
                                    font-size: 24px;
                                    margin-bottom: 20px;
                                }
                                p {
                                    color: #666666;
                                    font-size: 16px;
                                    line-height: 1.5;
                                    margin-bottom: 20px;
                                }
                            </style>
                        </head>
                        <body>
                            <h1>Hello ${fullName}!</h1>
                            <p> Unfortunately your project <strong> ${projectName} </strong> that was submitted in Dell Heroes was <strong> Dennied </strong>, you may look into it with your manager to know the details. </p>
                        </body>
                        </html>
                        `,
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
