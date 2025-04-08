package Sections;

import java.awt.Color;
import java.awt.Graphics2D;
import java.awt.geom.Rectangle2D;
import java.awt.geom.RoundRectangle2D;
import java.util.Random;

import Cards.Card;
import Cards.ObjectifCard;
import Game.GameData;

public class ObjectifPerso implements Section {
	private ObjectifCard objectif1;
	private ObjectifCard objectif2;

	// Constructeur pour creer les objectifs perso
	// =============================
	public ObjectifPerso() {
		this.objectif1 = genereObjectif();
		this.objectif2 = genereObjectif();
	}
	// =============================

	// Fonction qui permet de generer une carte objectif
	// ================================================
	public ObjectifCard objectif1() {
		return objectif1;
	}
	// ================================================

	// Fonction qui permet de generer une carte objectif
	// ================================================
	public ObjectifCard genereObjectif() {
		Random random = new Random();
		int point = random.nextInt(2);
		int type = random.nextInt(4);
		return new ObjectifCard(tableau[type], point + 2);
	}
	// ================================================

	// Méthode pour dessiner les objectifs perso
	// ====================================================================================================
	public void draw(Graphics2D graph, Coordinate coin, int width, int height, GameData data) {
		graph.setColor(new Color(0, 0, 0));
		graph.draw(new Rectangle2D.Double(coin.x(), coin.y(), width, height));
		drawcards(graph, coin.x(), coin.y() + 10);
		drawclicker(graph, coin.x(), coin.y() + 10, data.cardobjectif());
	}
	// ====================================================================================================

	// Méthode pour dessiner les deux cartes objectifs
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
		drawcardclicker(graph, x + 10, y, objectif1, carddata);
		drawcardclicker(graph, x + 10, y + heigthcard + 10, objectif2, carddata);
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
	// ================================================================================================
	public ObjectifCard action(int i, int j, int x, int y,ObjectifCard card) {
		if (choisir(i, j, x + 10, y, objectif1)) {
			return objectif1;
		}
		if (choisir(i, j, x + 10, y + heigthcard + 10, objectif2)) {
			return objectif2;
		}
		return card;
	}
	// ================================================================================================

	// Methode pour savoir si la carte est choisi
	// ==================================================================================================
	public boolean choisir(int i, int j, int x, int y, ObjectifCard card) {
		return card != null && card.appartientrectangle(i, j, x, y);
	}
	// ==================================================================================================

	// Methode pour enlever la carte qui n'a pas été choisi
	// ==================================================================================================
	public void enleverautrecard(ObjectifCard card) {
		if (card.equals(objectif1)) {
			objectif2 = null;
		}
		if (card.equals(objectif2)) {
			objectif1 = null;
		}
	}
	// ==================================================================================================
}
