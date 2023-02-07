package ch.zhaw.blueberry2.entity;

import javax.persistence.*;

import java.util.List;

@Entity
public class Child extends Person {
    @OneToMany(mappedBy="child")
    private List<ChildObservation> childObservations;

    public List<ChildObservation> getChildObservations() {
        return childObservations;
    }

    public void setChildObservations(List<ChildObservation> childObservations) {
        this.childObservations = childObservations;
    }
}
