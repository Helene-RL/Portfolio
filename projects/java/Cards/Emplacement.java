package Cards;

//Import
//======================================
import java.awt.Color;
import java.awt.Graphics2D;
import java.awt.geom.RoundRectangle2D;
import java.util.Objects;
//======================================

import Sections.Coordinate;

public record Emplacement(){
	
	// Méthode pour afficher les emplacement disponible pour les cartes en jaune clair
	//==================================================================================
	public void draw(Graphics2D graph, Coordinate coor,double width,double height,int angle) {
		Objects.requireNonNull(coor);
		graph.setPaint(new Color(255, 245, 149,150));
		graph.fill(new RoundRectangle2D.Double(coor.x(), coor.y(), width, height,angle,angle));
	//==================================================================================
	}
}
