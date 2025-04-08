package Sections;

import java.awt.Color;
import java.awt.Graphics2D;
import java.awt.geom.Rectangle2D;
import java.awt.geom.RoundRectangle2D;
import java.util.Random;

import Cards.Card;
import Cards.RessourceCard;
import Game.GameData;

public class MainJ implements Section {
	private Card card1;
	private Card card2;
	private Card card3;

	// Constructeur pour creer la main du joueur
	//=============================
	public MainJ() {
		this.card1 = genereCard();
		this.card2 = genereCard();
		this.card3 = genereCard();
	}
	//=============================
	
	// Fonction qui permet de generer une carte
	//================================================
	public Card genereCard() {
		Random random = new Random();
		int point = random.nextInt(2);
		int type = random.nextInt(4);
		return new RessourceCard(tableau[type], point, true);
	}
	//================================================
	
	
	// Méthode pour dessiner la main du joueur
	//====================================================================================================
	public void draw(Graphics2D graph, Coordinate coin, int width, int height, GameData data) {
		graph.setColor(new Color(0, 0, 0));
		graph.draw(new Rectangle2D.Double(coin.x(), coin.y(),width,height));
		drawcards(graph, coin.x(), coin.y()+30);
		drawclicker(graph, coin.x(), coin.y()+30,data.card);
	}
	//====================================================================================================

	// Méthode pour dessiner les trois carte dans la main du joueur
	//==============================================================
	public void drawcards(Graphics2D graph, int x, int y) {
		if (card1 != null) {
			card1.drawCard(graph, new Coordinate(x + 10, y + 10),widthcard,heigthcard);
		}
		if (card2 != null) {
			card2.drawCard(graph, new Coordinate(x + widthcard+30, y + 10),widthcard,heigthcard);
		}
		if (card3 != null) {
			card3.drawCard(graph, new Coordinate(x + widthcard*2+50, y + 10),widthcard,heigthcard);
		}
	}
	//==============================================================

	// Méthode pour dessiner la carte qui est selectionner
	public void drawclicker(Graphics2D graph, int x, int y,Card carddata) {
		drawcardclicker(graph, x + 10, y + 10, card1,carddata);
		drawcardclicker(graph, x + widthcard+30, y + 10, card2,carddata);
		drawcardclicker(graph, x + widthcard*2+50, y + 10, card3,carddata);
	}

	// Méthode pour dessiner un contour lorsque la carte est selectionner
	public void drawcardclicker(Graphics2D graph, int x, int y, Card carte,Card carddata) {
		if (carddata != null && carddata.equals(carte)) {
			var rect = new RoundRectangle2D.Double(x - 5, y - 5, widthcard + 10, heigthcard + 10, angle, angle);
			graph.setColor(new Color(50, 190, 0));
			graph.draw(rect);
		}
	}
	
	// Méthode pour enlever la carte de la main du joueur lorsqu'on la pose
	//================================
	public void poser(Card card) {
		if (card.equals(card1)) {
			card1 = null;
		}
		if (card.equals(card2)) {
			card2 = null;
		}
		if (card.equals(card3)) {
			card3 = null;
		}
	}
	//================================
	
	
	// Méthode pour afficher dans la main du joueur la carte piocher dans la pioche
	//=====================================
	public boolean piocher(Card card) {
		verifface(card);
		if (card1 == null) {
			veriffacemain(card2);
			card1 = card;
			return true;
		} else if (card2 == null) {
			veriffacemain(card3);
			card2 = card;
			return true;
		} else if (card3 == null) {
			veriffacemain(card1);
			card3 = card;
			return true;
		}
		return false;
	}
	//=====================================
	 
	// Verifie si la carte est face
	//================================
	public void verifface(Card card) {
		if (!card.face()) {
			card.retourner();
		}
	}
	//================================


    // Verifie la face d'une carte dans la main du joueur
	//======================================
	public void veriffacemain(Card card) {
		if (!card.face()) {
			retourner();
		}
	}
	//=====================================

	// Methode qui determine si une des carte a été selectionner
	//============================================================
	public Card action(int i, int j, int x, int y,GameData data) {
		if (verifie(i, j, x + 10, y + 10, card1, 1,data.card)) {
			return card1;
		}
		if (verifie(i, j, x + widthcard+30, y + 10, card2, 2,data.card)) {
			return card2;
		}
		if (verifie(i, j, x + widthcard*2+50, y + 10, card3, 3,data.card)) {
			return card3;
		}
		return null;
	}
	//============================================================

	// Verifie si la carte appartient au rectangle (main du joueur)
	//====================================================================================================
	private boolean verifie(int i, int j, int x, int y, Card card, int nb,Card carddata) {
		return card != null && card.appartientrectangle(i, j, x, y) && !card.equals(carddata);
	}
	//====================================================================================================

	// Méthode pour retourner les cartes de la main du joueur
	//=====================================
	public void retourner() {
		if (card1 != null) {
			card1.retourner();
		}
		if (card2 != null) {
			card2.retourner();
		}
		if (card3 != null) {
			card3.retourner();
		}
	}
	//=====================================
}
