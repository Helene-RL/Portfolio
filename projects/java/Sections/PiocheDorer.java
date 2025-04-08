package Sections;

// Import
//======================================
import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics2D;
import java.awt.geom.Rectangle2D;
import java.awt.geom.RoundRectangle2D;
import java.util.Random;

import Cards.Card;
import Cards.GoldCard;
import Game.GameData;

//======================================

public class PiocheDorer implements Section {
	private GoldCard pioche;
	private GoldCard card1;
	private GoldCard card2;

	// Constructeur
	// =================================
	public PiocheDorer() {
		this.pioche = placecard(false);
		this.card1 = placecard(true);
		this.card2 = placecard(true);
	}
	// =================================

	// Generer des cartes Dorer avec des valeurs aleatoire
	// =======================================================
	public GoldCard placecard(boolean face) {
		Random random = new Random();
		int point = random.nextInt(3);
		int type = random.nextInt(4);
		return new GoldCard(tableau[type], point + 1, face);
	}
	// =======================================================

	// Méthode pour dessiner la pioche dorer
	// =========================================================================================================
	public void draw(Graphics2D graph, Coordinate coin, int width, int height, GameData data) {
		graph.setPaint(new Color(255, 255, 255, 50));
		graph.fill(new Rectangle2D.Double(coin.x(), coin.y(),width,height));
		graph.setPaint(new Color(0, 0, 0));
		graph.draw(new Rectangle2D.Double(coin.x(), coin.y(),width,height));
		graph.setFont(new Font("Times Roman", Font.BOLD, 20));
		graph.drawString("Carte dorure:", coin.x()+15, coin.y()+30);
		drawcards(graph,coin.x()+15, coin.y()+30);
		drawclicker(graph,coin.x()+15, coin.y()+30,data.card);
	}
	// =========================================================================================================

	// Méthode pour dessiner les cartes dorer dans la pioche dorer
	// =======================================================
	public void drawcards(Graphics2D graph, int x, int y) {
		pioche.drawCard(graph, new Coordinate(x, y + 10),widthcard,heigthcard);
		card1.drawCard(graph, new Coordinate(x, y + heigthcard+20),widthcard,heigthcard);
		card2.drawCard(graph, new Coordinate(x, y + heigthcard*2+30),widthcard,heigthcard);
	}
	// =======================================================

	// Méthode pour dessiner la carte qui est selectionner
	// =========================================================
	public void drawclicker(Graphics2D graph, int x, int y,Card carddata) {
		drawcardclicker(graph, x, y + 10, pioche,carddata);
		drawcardclicker(graph, x, y + heigthcard+20, card1,carddata);
		drawcardclicker(graph, x, y + heigthcard*2+30, card2,carddata);
	}
	// =========================================================

	// Méthode qui permet de dessiner le contour de la carte lorsqu'elle est
	// selectionne
	// ====================================================================================================
	public void drawcardclicker(Graphics2D graph, int x, int y, GoldCard carte,Card carddata) {
		if (carddata != null && carddata.equals(carte)) {
			var rect = new RoundRectangle2D.Double(x - 5, y - 5, widthcard + 10, heigthcard + 10, angle, angle);
			graph.setColor(new Color(50, 190, 0));
			graph.draw(rect);
		}
	}
	// ====================================================================================================

	// Méthode pour piocher une carte
	// ================================================
	private void piocher(int nb) {
		if (nb == 1) {
			pioche = placecard(false);
		}
		if (nb == 2) {
			card1 = pioche;
			card1.retourner();
			pioche = placecard(false);
		}
		if (nb == 3) {
			card2 = pioche;
			card2.retourner();
			pioche = placecard(false);
		}
	}
	// ================================================

	// Methode qui determine si une des carte a été selectionner
	// =====================================================================
	public GoldCard action(int i, int j, int x, int y, MainJ mainjoueur, GameData data) {
		if (verifie(i, j, x, y + 10, pioche, 1, mainjoueur,data)) {
			return pioche;
		}
		if (verifie(i, j, x, y + heigthcard+20, card1, 2, mainjoueur,data)) {
			return card1;
		}
		if (verifie(i, j, x, y + heigthcard*2+30, card2, 3, mainjoueur,data)) {
			return card2;
		}
		return null;
	}
	// =====================================================================

	// Methode pour determiner si une carte a deja été selectionner et si c'est deja
	// le cas on eleve la carte de la pioche et on la met dans la main du joueur
	// ============================================================================================
	private boolean verifie(int i, int j, int x, int y, GoldCard card, int nb, MainJ mainjoueur,GameData data) {
		if (card != null && card.appartientrectangle(i, j, x, y)) {
			if (card.equals(data.card()) && mainjoueur.piocher(card)) {
				piocher(nb);
				data.tourplusun();
			} else if (!card.equals(data.card())) {
				return true;
			}
		}
		return false;
	}
	// =============================================================================================
}