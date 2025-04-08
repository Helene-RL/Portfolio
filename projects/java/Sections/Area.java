package Sections;

//import nécessaires
//======================================
import java.awt.Color;
import java.awt.Graphics2D;
import java.awt.geom.Rectangle2D;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Objects;
//======================================

import Cards.Card;
import Cards.Emplacement;
import Cards.StarterCard;
import Game.GameData;

public class Area implements Section {
	private Map<Coordinate, Card> mapcard;
	private Map<Coordinate, Emplacement> mapEmplacement;

	// Constructeur de la classe
	// ==============================================================================
	public Area(InfoJoueur info) {
		this.mapcard = new LinkedHashMap<Coordinate, Card>();
		this.mapEmplacement = new LinkedHashMap<Coordinate, Emplacement>();
		var card = new StarterCard(true);
		addFirstcarte(card, new Coordinate(390, 240), info);
	}
	// ==============================================================================

	// retourne les 1er cooordonnées de la mapcard
	// ==============================================================================
	public Coordinate firstcoor() {
		for (Coordinate coor : mapcard.keySet()) {
			return coor;
		}
		return null;
	}
	// ==============================================================================

	// retourne la la carte qui est au coordonnée donnée en parametre
	// ==============================================================================
	public Card obtenircard(Coordinate coor) {
		return mapcard.getOrDefault(coor, null);
	}
	// ==============================================================================

	// Fonction pour dessiné le plateau de jeux
	// ==============================================================================
	public void draw(Graphics2D graph, Coordinate coin, int width, int height, GameData data) {
		Objects.requireNonNull(graph);
		graph.setColor(new Color(0, 0, 0));
		graph.draw(new Rectangle2D.Double(coin.x(), coin.y(), width, height));
		// ajustertaille(width, heigth, (int) (widthcard * ajustement), (int)
		// (heigthcard * ajustement));
		drawmapcard(graph);
		if (data.nb_action() % 2 == 0) {// GameData
			drawmapEmplacement(graph);
		}
	}
	// ==============================================================================

	// Méthode pour dessiner les cartes deja poser
	// ==============================================================================
	public void drawmapcard(Graphics2D graphics) {
		for (Coordinate coor : mapcard.keySet()) {
			var card = mapcard.get(coor);
			card.drawCard(graphics, coor, widthcard, heigthcard);
		}
	}
	// ==============================================================================

	// Méthode pour afficher les emplacement disponible pour les cartes en jaune
	// clair
	// ==============================================================================
	public void drawmapEmplacement(Graphics2D graphics) {
		for (Coordinate coor : mapEmplacement.keySet()) {
			var emplacement = mapEmplacement.get(coor);
			emplacement.draw(graphics, coor, widthcard, heigthcard, angle);
		}
	}
	// ==============================================================================

	// Methode pour poser la carte passer en argument si le joueur a les ressources
	// pour la poser
	// ==============================================================================
	public Card action(int i, int j, Card card, MainJ mainjoueur, GameData data) {
		var coordinate = appartienEmplacements(i, j);
		if (card != null && coordinate != null && verifieress(card, data.info())) {
			data.tourplusun();
			mainjoueur.poser(card);
			addcarte(card, coordinate, data.info());
			return null;
		} else {
			return card;
		}
	}
	// ==============================================================================

	// Methode pour verifier si le joueur a les ressources pour poser la carte
	// ==============================================================================
	public boolean verifieress(Card card, InfoJoueur info) {
		Map<String, Integer> map = transformemap(card.listeressnecessaire());
		for (String type : map.keySet()) {
			if (map.get(type) > info.nbress().get(type)) {
				return false;
			}
		}
		return true;
	}
	// ==============================================================================

	// Methode pour renvoyer une map avec les ressources comme clé et le nombre de
	// ses ressources en valeurs
	// ==============================================================================
	public Map<String, Integer> transformemap(String[] lst) {
		Objects.requireNonNull(lst);
		var map = new HashMap<String, Integer>();
		for (String type : lst) {
			map.put(type, map.getOrDefault(type, 0) + 1);
		}
		return map;
	}
	// ==============================================================================

	// Methode pour savoir si les coordonnées passer en argument sont dans un
	// emplacement
	public Coordinate appartienEmplacements(int i, int j) {
		for (Coordinate coor : mapEmplacement.keySet()) {
			if (appartientrectangle(i, j, coor.x(), coor.y(), widthcard, heigthcard)) {
				return coor;
			}
		}
		return null;
	}

	// Méthode pour ajouter une carte a la map qui contient les cartes poser
	// ==============================================================================
	public void addFirstcarte(Card card, Coordinate coor, InfoJoueur info) {
		Objects.requireNonNull(card);
		if (!mapcard.containsKey(coor)) {
			mapcard.put(coor, card);
			info.changepoint(card.point(this, info, coor));//
			info.changenbress(card.listecoin());
		}
	}
	// ==============================================================================

	// Méthode pour ajouter une carte a la map qui contient les cartes poser
	// ==============================================================================
	public void addcarte(Card card, Coordinate coor, InfoJoueur info) {
		Objects.requireNonNull(card);
		if (!mapcard.containsKey(coor)) {
			mapcard.put(coor, card);
			info.changepoint(card.point(this, info, coor));//
			info.changenbress(card.listecoin());
			enleveress(coor, info);
			addemplacements(card, coor);
			removeEmplacement(coor);
		}
	}
	// ==============================================================================

	// Methode pour enlever les ressources qui ont été recouverte par la carte
	// ==============================================================================
	public void enleveress(Coordinate coor, InfoJoueur info) {
		for (Coordinate coordinate : mapcard.keySet()) {
			if (!coordinate.equals(coor)) {
				inforess(coor, coordinate, mapcard.get(coordinate), info, 0);
				inforess(coor, new Coordinate((int) (coordinate.x() + (widthcard - widthcoin)), coordinate.y()),
						mapcard.get(coordinate), info, 1);
				inforess(coor, new Coordinate((int) (coordinate.x() + (widthcard - widthcoin)),
						(int) (coordinate.y() + (heigthcard - widthcoin))), mapcard.get(coordinate), info, 2);
				inforess(coor, new Coordinate(coordinate.x(), (int) (coordinate.y() + (heigthcard - widthcoin))),
						mapcard.get(coordinate), info, 3);
			}
		}
	}
	// ==============================================================================

	// Methode pour changer le nombre de ressource que possede le joueur si la carte
	// recouvre la ressource
	// ==============================================================================
	public void inforess(Coordinate coor, Coordinate coordinate, Card card, InfoJoueur info, int nb) {
		if (appartientrectangle(coordinate.x(), coordinate.y(), coor.x(), coor.y(), widthcard, heigthcard)) {
			info.changerress(card.listecoin()[nb]);
		}
	}
	// ==============================================================================

	// Methode pour supprimer un emplacement
	// ==============================================================================
	public void removeEmplacement(Coordinate coor) {
		mapEmplacement.remove(coor);
	}
	// ==============================================================================

	// Methode pour ajouter des emplacements quand une carte est posé
	// ==============================================================================
	public void addemplacements(Card card, Coordinate coor) {
		int ecart1 = (int) (widthcard - widthcoin);
		int ecart2 = (int) (heigthcard - widthcoin);
		addemplacement(new Coordinate(coor.x() - ecart1, coor.y() - ecart2), card.listecoin()[0]);
		addemplacement(new Coordinate(coor.x() + ecart1, coor.y() - ecart2), card.listecoin()[1]);
		addemplacement(new Coordinate(coor.x() + ecart1, coor.y() + ecart2), card.listecoin()[2]);
		addemplacement(new Coordinate(coor.x() - ecart1, coor.y() + ecart2), card.listecoin()[3]);
	}
	// ==============================================================================

	// Methode pour ajouter un emplacement
	// ==============================================================================
	public void addemplacement(Coordinate coor, String type) {
		if (type != "Invisible" && !mapcard.keySet().contains(coor) && !mapEmplacement.keySet().contains(coor)) {
			mapEmplacement.put(coor, new Emplacement());
		}
	}
	// ==============================================================================

	// Methode pour compter le nombre coin recouvert par une carte
	// ==============================================================================
	public int nbcoinrecouvert(Coordinate coor) {
		var total = 0;
		for (Coordinate coordinate : mapcard.keySet()) {
			if (!coordinate.equals(coor)) {
				total += verifposition(coor, coordinate);
				total += verifposition(coor,
						new Coordinate((int) (coordinate.x() + (widthcard - widthcoin)), coordinate.y()));
				total += verifposition(coor, new Coordinate((int) (coordinate.x() + (widthcard - widthcoin)),
						(int) (coordinate.y() + (heigthcard - widthcoin))));
				total += verifposition(coor,
						new Coordinate(coordinate.x(), (int) (coordinate.y() + (heigthcard - widthcoin))));
			}
		}
		return total;
	}
	// ==============================================================================

	// Methode pour verifier si un coin de la carte recouvre une autre carte
	// ==============================================================================
	public int verifposition(Coordinate coor, Coordinate coordinate) {
		if (appartientrectangle(coordinate.x(), coordinate.y(), coor.x(), coor.y(), widthcard, heigthcard)) {
			return 1;
		}
		return 0;
	}
	// ==============================================================================

	// Methode qui permet de deplacer l'ensemble des cartes et des emplacements a
	// droite ou a gauche(le x est negatif) et en haut ou en bas( si y est negatif)
	// ==============================================================================
	public void deplaceplateau(int x, int y) {
		var newmapcard = new LinkedHashMap<Coordinate, Card>();
		for (Coordinate coor : mapcard.keySet()) {
			Coordinate newcoor = new Coordinate(coor.x() + x, coor.y() + y);
			newmapcard.put(newcoor, mapcard.get(coor));
		}
		var newmapemplacement = new LinkedHashMap<Coordinate, Emplacement>();
		for (Coordinate coord : mapEmplacement.keySet()) {
			Coordinate newcoor = new Coordinate(coord.x() + x, coord.y() + y);
			newmapemplacement.put(newcoor, mapEmplacement.get(coord));
		}
		mapcard = newmapcard;
		mapEmplacement = newmapemplacement;
	}
	// ==============================================================================

	// Retourne la StartedCard
	// ===========================================================================
	public void retournerStarterCard() {
		for (Coordinate coor : mapcard.keySet()) {
			mapcard.get(coor).retourner();
			break;
		}
	}
	// ===========================================================================

	// Methode pour savoir si x appartient au carre
	// ===========================================================================
	private static boolean xappartientcarre(double minx, double x, double maxx) {
		return (minx <= x && x <= maxx);
	}
	// ===========================================================================

	// Methode pour savoir si y appartient au carre
	// ===========================================================================
	private static boolean yappartientcarre(double miny, double y, double maxy) {
		return (miny <= y && y <= maxy);
	}
	// ===========================================================================

	// Methode pour savoir si un point appartient a une carte
	// ==========================================================================================
	public static boolean appartientrectangle(double i, double j, double x, double y, double width, double height) {
		return xappartientcarre(x, i, x + width) && yappartientcarre(y, j, y + height);
	}
	// ==========================================================================================
}
