import { ProfileInfos } from "../../components/ProfileInfos";
import { ProfileProject } from "../../components/ProfileProjects";
import { ProfileSkills } from "../../components/ProfileSkills";


export function Profile() {
    return (
        <div>
            <ProfileInfos />
            <ProfileProject />
            <ProfileSkills />
        </div>
    )
}