package ch.zhaw.blueberry2.controller;

import java.util.List;

import ch.zhaw.blueberry2.entity.Project;
import ch.zhaw.blueberry2.entity.ProjectRepository;
import ch.zhaw.blueberry2.entity.ToDo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ProjectController {


    @Autowired
    private ProjectRepository projectRepository;



    public List<Project> listAllProjects(String loginName) {
        return projectRepository.findByOwner(loginName);
    }

    public void persistProject(Project newProject, String owner) {
        newProject.setId(null);
        // We only create empty projects
        newProject.getToDos().clear();
        newProject.setOwner(owner);
        projectRepository.save(newProject);
    }

    public void addToDo(Long projectId, ToDo toDo, String owner) {
        Project project = projectRepository.getOne(projectId);
        if(project == null || !project.getOwner().equals(owner)) {
            return;
        }  
        // Ensure that JPA creates a new entity
        toDo.setId(null);
        toDo.setOwner(owner);
        project.getToDos().add(toDo);
        projectRepository.save(project);
    }
    
}