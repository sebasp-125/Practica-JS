function project(name, description, teamMembers, status) {
    this.NameProject = name;
    this.DescriptionProject = description;
    this.NumberMembers = teamMembers;
    this.ProjectStatus = status;

    this.addProject = function (NewNameProject, NewDescription, NewTeamMembers, NewStatus) {
        const NewProject_list = new project(NewNameProject, NewDescription, NewTeamMembers, NewStatus);
        projectList.push(NewProject_list);
        this.printProjectList();
    };

    this.printProjectList = function () {
        if (projectList.length >= 1) {
            projectList.forEach(CurrentProject => {
                console.log(`Name : ${CurrentProject.NameProject} Description : ${CurrentProject.DescriptionProject} Team Members: ${CurrentProject.NumberMembers}  Status: ${CurrentProject.ProjectStatus ? 'Filled Project. ¡Congratulation!' : 'Failed Project, ¿You need Help You?'}`);
            });
        }
    };

    this.findProjectByName = function (projectName) {
        let found = false;
        projectList.forEach(search => {
            if (projectName === search.NameProject) {
                console.log("---Project Found-----");
                console.log(`Name : ${search.NameProject} Description : ${search.DescriptionProject} Team Members: ${search.NumberMembers}  Status: ${search.ProjectStatus ? 'Filled Project. Congratulations!' : 'Failed Project, Do you need help?'}`);
                found = true;
            }
        });
        if (!found) {
            console.log("Project not found");
        }
    }

    this.findProjectByStatus = function (projectStatus) {
        let found = false;
        projectList.forEach(search => {
            if (projectStatus === search.ProjectStatus) {
                console.log("---Project Found status-----");
                console.log(`Name : ${search.NameProject} Description : ${search.DescriptionProject} Team Members: ${search.NumberMembers}  Status: ${search.ProjectStatus ? 'Filled Project. Congratulations!' : 'Failed Project, Do you need help?'}`);
            }
        });
        if (!found) {
            console.log("No projects found with the specified status");
        }
    }

    this.updateProjectStatus = function (projectName, newStatus) {
        let found = false;
        projectList.forEach(project => {
            if (projectName === project.NameProject) {
                project.ProjectStatus = newStatus;
                found = true;
                console.log(`Project "${projectName}" status updated successfully to "${newStatus}".`);
                this.printProjectList()
            }
        });
        if (!found) {
            console.log("Project not found.");
        }
    };

    this.AddUser = function (amountOfUser, projectName) {
        let projectFound = false;
        projectList.forEach(project => {
            if (project.NameProject === projectName) {
                projectFound = true;
                project.NumberMembers += amountOfUser;
                console.log(`${amountOfUser} user(s) added to project "${projectName}".`);
                console.log(`Total number of members for project "${projectName}" is now ${project.NumberMembers}.`);
            }
        });

        if (!projectFound) {
            console.log(`Project "${projectName}" not found.`);
        }

        return projectFound;
    };

    this.DeleteUser = function (NameProject , AmountOfUser) {
        let ProjectFound = false;
        projectList.forEach(project => {
            if (project.NameProject === NameProject) {
                ProjectFound = true;
                project.NumberMembers -= AmountOfUser;
                console.log(`${AmountOfUser} user(s) deleted from project "${NameProject}".`);
                console.log(`Total number of members for project "${NameProject}" is now ${project.NumberMembers}.`);
                this.printProjectList();
            }
        });
    
        if (!ProjectFound) {
            console.log(`Project "${NameProject}" not found.`);
        }
    };
    

}
const projectList = [];

//Instances
const project1 = new project("Math", "This is the math project", 2, true);
projectList.push(project1);

// //Create new project
project1.addProject("Physical", "This is the physical project", "6", true);

// //Search Project by Name 
project1.findProjectByName("Math");

// //Search Project by status
project1.findProjectByStatus(true);

// // status project 
project1.updateProjectStatus("Math", "Hi"); 

const userAdded = project1.AddUser(5, "Math");
if (userAdded) {
    project1.printProjectList();
}

project1.DeleteUser("Math", 1);
project1.printProjectList();

