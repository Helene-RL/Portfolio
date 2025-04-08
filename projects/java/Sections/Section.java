package Sections;

import java.awt.Graphics2D;

import Game.GameData;

public interface Section {
	// Internal section 
	
	// Tableau des types de ressources possibles
	String tableau[] = { "Insect", "Fungi", "Plant", "Animal", "Quill", "Manuscript", "Inkwell" };
	// largeur d'une carte
	int widthcard = 200;
	// hauteur d'une carte
	int heigthcard = 110;
	// angle des coins d'une carte
	int angle = 12;
	// largeur des coins d'une carte
	int widthcoin = (int) (widthcard*0.15);
	
	// Méthode pour dessiner une carte
	void draw(Graphics2D graphics, Coordinate coin, int width, int height, GameData data);
}
