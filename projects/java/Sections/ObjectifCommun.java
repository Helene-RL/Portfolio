package Sections;

import java.awt.Color;
import java.awt.Graphics2D;
import java.awt.geom.Rectangle2D;
import java.awt.geom.RoundRectangle2D;
import java.util.Random;

import Cards.Card;
import Cards.ObjectifCard;
import Game.GameData;

public class ObjectifCommun implements Section {
	private ObjectifCard objectif1;
	private ObjectifCard objectif2;

	// Constructeur pour creer les objectifs perso
	// =============================
	public ObjectifCommun() {
		this.objectif1 = genereObjectif();
		this.objectif2 = genereObjectif();
	}
	// =============================

	// Fonction qui permet de generer une carte objectif
	// ================================================
	public ObjectifCard genereObjectif() {
		Random random = new Random();
		int point = random.nextInt(2);
		int type = random.nextInt(4);
		return new ObjectifCard(tableau[type], point+2);
	}
	// ================================================

	// Méthode pour dessiner les objectifs perso
	// ====================================================================================================
	public void draw(Graphics2D graph, Coordinate coin, int width, int height, GameData data) {
		graph.setColor(new Color(0, 0, 0));
		graph.draw(new Rectangle2D.Double(coin.x(), coin.y(), width, height));
		drawcards(graph, coin.x(), coin.y() + 10);
		drawclicker(graph, coin.x(), coin.y() + 30, data.card);
	}
	// ====================================================================================================

	// Méthode pour dessiner les trois carte dans la main du joueur
	// ==============================================================
	public void drawcards(Graphics2D graph, int x, int y) {
		if (objectif1 != null) {
			objectif1.drawCard(graph, new Coordinate(x + 10, y), widthcard, heigthcard);
		}
		if (objectif2 != null) {
			objectif2.drawCard(graph, new Coordinate(x + 10, y + heigthcard + 10), widthcard, heigthcard);
		}
	}
	// ==============================================================

	// Méthode pour dessiner la carte qui est selectionner
	public void drawclicker(Graphics2D graph, int x, int y, Card carddata) {
		drawcardclicker(graph, x + 10, y + 10, objectif1, carddata);
		drawcardclicker(graph, x + widthcard + 30, y + 10, objectif2, carddata);
	}

	// Méthode pour dessiner un contour lorsque la carte est selectionner
	public void drawcardclicker(Graphics2D graph, int x, int y, Card carte, Card carddata) {
		if (carddata != null && carddata.equals(carte)) {
			var rect = new RoundRectangle2D.Double(x - 5, y - 5, widthcard + 10, heigthcard + 10, angle, angle);
			graph.setColor(new Color(50, 190, 0));
			graph.draw(rect);
		}
	}

	// Methode qui determine si une des carte a été selectionner
	// ============================================================
	public Card action(int i, int j, int x, int y, GameData data) {
		if (verifie(i, j, x + 10, y + 10, objectif1, 1, data.card)) {
			return objectif1;
		}
		if (verifie(i, j, x + widthcard + 30, y + 10, objectif2, 2, data.card)) {
			return objectif2;
		}
		return null;
	}
	// ============================================================

	// Verifie si la carte appartient au rectangle
	// ====================================================================================================
	private boolean verifie(int i, int j, int x, int y, Card card, int nb, Card carddata) {
		return card != null && card.appartientrectangle(i, j, x, y) && !card.equals(carddata);
	}
	// ====================================================================================================
}
