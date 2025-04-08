package Cards;

import java.awt.Graphics2D;

import Sections.Area;
import Sections.Coordinate;
import Sections.InfoJoueur;
import Sections.Section;

//Déclaration de l'interface Carte, qui étend l'interface Section
public interface Card{
	// Tableau des types de ressources possibles sur une carte
	String tab[] = { "Insect", "Fungi", "Plant", "Animal", "Quill", "Manuscript", "Inkwell", "Empty", "Invisible" };
	// largeur de la carte
	int widthcard = Section.widthcard;
	// hauteur de la carte
	int heigthcard = Section.heigthcard;
	// angle des coins de la carte
	int angle = Section.angle;
	// largeur des coins
	int widthcoin = (int) (Section.widthcard*0.15);

	// Méthode pour dessiner la carte
	void drawCard(Graphics2D graph, Coordinate coin,double width,double height);
	// Methode pour obtenir la liste des coins de la carte
	String[] listecoin();
	// Methode pour savoir si les Coordonnées (i,j) appartient à la carte à la position (x,y)
	boolean appartientrectangle(int i, int j, int x, int y);
	// Methode pour obtenir les points que donne la carte
	int point(Area area,InfoJoueur info, Coordinate coor);
	// Methode pour obtenir la liste des ressources necessaire à la pose de la carte
	String[] listeressnecessaire();
	// Methode pour retourner la carte
	void retourner();
	// Methode pour savoir quelle est la face visible de la carte
	boolean face();
}
