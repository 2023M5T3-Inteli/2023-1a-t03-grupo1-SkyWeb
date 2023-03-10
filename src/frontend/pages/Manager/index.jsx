import { Box } from "@mui/material";
import { Container } from "@mui/system";
import Image from "mui-image"
import { ManagerHeader } from "../../components/managerHeader";
import { ActionAreaCard } from "../../components/pending";



export function Manager() {
    const array = [{ status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Javasdadakdnajdhaudhaudaudaudau"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] }, { status: "Open", nome: "teste card", deadline: "02/08/23", area: "Finance", duration: "3 Months", tags: ["Java", "Python", "Ruby"] },]

    
    return (
        <div>
            <ManagerHeader />

            {array.map((item) => {
                return (
                    <ActionAreaCard status={item.status} name={item.nome} area={item.area} deadLine={item.deadline} duration={item.duration} tags={item.tags} />
                )
            })}
            
        </div>
    )
}