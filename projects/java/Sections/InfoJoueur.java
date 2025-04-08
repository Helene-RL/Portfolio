package Sections;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics2D;
import java.awt.geom.Rectangle2D;
import java.awt.image.BufferedImage;
import java.io.InputStream;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

import javax.imageio.ImageIO;

import Cards.Coin;
import Game.GameData;

//Class des information du joueur utilisant l'interface Section
public class InfoJoueur implements Section {

	// Attributs
	// ====================================
	private int pointJ;
	private Map<String, Integer> nbress;
	// ====================================

	// Constructeur par défaut
	// ===================================
	public InfoJoueur() {
		this.pointJ = 0;
		this.nbress = initnbress();
	}
	// ===================================

	// Constructeur par défaut
	// ===================================
	public int score() {
		return pointJ;
	}
	// ===================================

	// Méthode pour obtenir la mad des ressources
	// ==========================================
	public Map<String, Integer> nbress() {
		return nbress;
	}
	// ==========================================

	// Initialisation de la map des ressources
	// ==================================================
	public HashMap<String, Integer> initnbress() {
		var map = new LinkedHashMap<String, Integer>();
		for (String type : tableau) {
			map.put(type, 0);
		}
		return map;
	}
	// ==================================================

	// Méthode pour augmenter les points du joueur celon ce qu'il a gagné en point
	// =====================================
	public void changepoint(int nb) {
		pointJ += nb;
	}
	// =====================================

	// methode pour rajouter des ressources
	// ======================================================
	public void changenbress(String[] listecoin) {
		for (String type : listecoin) {
			if (type != "Empty" && type != "Invisible") {
				nbress.replace(type, nbress.get(type) + 1);
			}
		}
	}
	// =======================================================

	// Methode pour enlever une ressource
	// ====================================================
	public void changerress(String type) {
		if (type != "Empty" && type != "Invisible") {
			if (nbress.get(type) > 0) {
				nbress.replace(type, nbress.get(type) - 1);
			}
		}
	}
	// ====================================================

	// Méthode pour afficher les information du joueur
	// ==============================================================================================
	public void draw(Graphics2D graph, Coordinate coin, int width, int height, GameData data) {
		var rect = new Rectangle2D.Double(coin.x(), coin.y(), width, height);
		graph.setColor(new Color(0, 0, 0));
		graph.draw(rect);
		graph.setFont(new Font("Times Roman", Font.BOLD, 20));
		graph.drawString("Point: " + pointJ, coin.x() + 30, 50);
		drawInforess(graph, coin.x() + 40, coin.y() + 60);
	}
	// ==============================================================================================

	// Méthode pour dessiner les informations des ressources
	// ================================================================================================
	public void drawInforess(Graphics2D graph, int x, int y) {
		int nb = 0;
		graph.setFont(new Font("Times Roman ", Font.BOLD, 17));
		for (String type : nbress.keySet()) {
			drawimage(graph, type, x + 5, y + (18 * nb), 16);
			graph.setColor(new Color(0, 0, 0));
			graph.drawString(" : " + nbress.get(type), x + 25, y + (18 * nb) + 14);
			nb++;
		}
	}
	// ================================================================================================

	// Méthode pour dessiner l'image des ressources dans les informations du joueur
	// ================================================================================
	public void drawimage(Graphics2D graph, String type, int x, int y, int width) {
		BufferedImage img = null;
		try (InputStream input = Coin.class.getResourceAsStream(type + ".png")) {
			img = ImageIO.read(input);
			graph.drawImage(img, x, y, width, width, null);
		} catch (Exception e) {
			colortype(graph, type);
			graph.fillRect(x, y, width, width);
		}
	}
	// ================================================================================

	// Méthode pour definir la couleur des ressources
	// =============================================================
	public void colortype(Graphics2D graph, String typec) {
		if (typec == "Insect") {
			graph.setColor(new Color(175, 5, 220));
		} else if (typec == "Fungi") {
			graph.setColor(new Color(220, 15, 15));
		} else if (typec == "Plant") {
			graph.setColor(new Color(50, 190, 0));
		} else if (typec == "Animal") {
			graph.setColor(new Color(70, 210, 250));
		} else {
			graph.setColor(new Color(252, 233, 60));
		}
	}
	// =============================================================

	// Méthode pour savoir si le joueur a gagner
	// ==========================================
	public boolean gagner() {
		return pointJ >= 20;
	}
	// ==========================================
}
