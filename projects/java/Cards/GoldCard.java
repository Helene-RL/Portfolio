package Cards;

//Import
//======================================
import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics2D;
import java.awt.Rectangle;
import java.awt.geom.*;
import java.awt.image.BufferedImage;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Objects;
import java.util.Random;
import javax.imageio.ImageIO; //Pour les images
//======================================

import Sections.Area;
import Sections.Coordinate;
import Sections.InfoJoueur;

// class des Carte Gold qui utilise l'interface Carte
public class GoldCard implements Card {

	// Les attributs
	// ==========================================
	private final int pointg;
	private final String type;
	private final String[] listecoin;
	private final String[] listeressnecessaire;
	private final String conditionpoint;
	private boolean face;
	// ==========================================

	// Constructeur pour pouvoir créer les Cartes Gold avec 'new'.
	// =========================================================
	public GoldCard(String type, int pointg, boolean face) {
		Objects.requireNonNull(type);
		this.type = type;
		this.pointg = pointg;
		this.listecoin = initlistecoin();
		this.listeressnecessaire = initlistress();
		this.conditionpoint = initconditionpoint();
		this.face = face;
	}
	// =========================================================

	// Méthode qui definit les conditions pour une carte de donner points
	// =========================================================
	public int point(Area area,InfoJoueur info, Coordinate coor) {
		if (conditionpoint == "") {
			return pointg;
		} else if (conditionpoint == "Coin") {
			return area.nbcoinrecouvert(coor) * 2;
		} else {
			return pointg *info.nbress().get(conditionpoint);
		}
	}
	// =========================================================

	// Renvoie la face de la carte
	// ======================
	public boolean face() {
		return face;
	}
	// ======================

	// Renvoie la liste des coins selon la face
	// ===============================================================
	public String[] listecoin() {
		if (face) {
			return listecoin;
		}
		String[] lst = { "Empty", "Empty", "Empty", "Empty", type };
		return lst;
	}
	// ================================================================

	// Renvoie la liste des ressources necessaire a la pose de la carte
	// ===============================================================
	public String[] listeressnecessaire() {
		return listeressnecessaire;
	}

	// Méthode pour changer la face d'une carte
	// ==========================
	public void retourner() {
		if (face) {
			face = false;
		} else {
			face = true;
		}
	}
	// ==========================

	// Methode pour initialier la liste des coins du recto
	// ==============================================
	public String[] initlistecoin() {
		String[] lst = new String[4];
		Random random = new Random();
		for (int i = 0; i < 4; i++) {
			int value = random.nextInt(tab.length);
			lst[i] = tab[value];
		}
		return lst;
	}
	// ==============================================

	// Methode pour initialier la condition pour avoir des points
	// ==============================================
	public String initconditionpoint() {
		if (pointg == 2) {
			return "Coin";
		}
		String[] lst = { "Quill", "Manuscript", "Inkwell" };
		Random random = new Random();
		return lst[random.nextInt(lst.length)];
	}
	// ==============================================

	// Methode pour initialier la liste des ressources necessaire pour poser la
	// carte
	// ==============================================
	public String[] initlistress() {
		Random random = new Random();
		int nbress = random.nextInt(3) + 3;
		String[] lst = new String[nbress];
		for (int i = 0; i < nbress; i++) {
			int value = random.nextInt(4);
			lst[i] = tab[value];
		}
		return lst;
	}
	// ==============================================

	// methode pour generer les coins du recto
	// ==============================================
	public ArrayList<Coin> generercoins() {
		var lst = new ArrayList<Coin>();
		lst.add(new Coin(listecoin[0]));
		lst.add(new Coin(listecoin[1]));
		lst.add(new Coin(listecoin[2]));
		lst.add(new Coin(listecoin[3]));
		return lst;
	}
	// ==============================================

	// Méthode pour generer les coins vide du verso
	// ===========================================
	public ArrayList<Coin> genereremptycoins() {
		var lst = new ArrayList<Coin>();
		lst.add(new Coin("Empty"));
		lst.add(new Coin("Empty"));
		lst.add(new Coin("Empty"));
		lst.add(new Coin("Empty"));
		return lst;
	}
	// ===========================================

	// Méthode pour dessiner recto ou verso d'une carte
	// ===================================================
	public void drawCard(Graphics2D graph, Coordinate coin,double width,double height) {
		Objects.requireNonNull(graph);
		Objects.requireNonNull(coin);
		if (face) {
			drawrecto(graph, coin,width,height);
		} else {
			drawverso(graph, coin,width,height);
		}
	}
	// ===================================================

	// Méthode pour dessiner le recto de la carte
	// =====================================================================================================
	public void drawrecto(Graphics2D graph, Coordinate coin,double widthcard,double heigthcard) {
		colortype(graph, type);
		graph.fill(new RoundRectangle2D.Double(coin.x(), coin.y(), widthcard, heigthcard, angle, angle));
		drawpoint(graph, coin.x(), coin.y());
		drawressourcesnecessaire(graph, coin,(int) widthcard, (int) heigthcard);
		drawcoins(graph, generercoins(), coin.x(), coin.y(),widthcard, heigthcard);
		graph.setPaint(new Color(0, 0, 0));
		graph.draw(new RoundRectangle2D.Double(coin.x(), coin.y(), widthcard, heigthcard, angle, angle));
	}
	// =====================================================================================================

	// Méthode pour dessiner le verso de la carte
	// =====================================================================================================
	public void drawverso(Graphics2D graph, Coordinate coin,double widthcard,double heigthcard) {
		colortype(graph, type);
		graph.fill(new RoundRectangle2D.Double(coin.x(), coin.y(), widthcard, heigthcard, angle, angle));
		drawcoins(graph, genereremptycoins(), coin.x(), coin.y(),widthcard, heigthcard);
		drawtype(graph,(int) (coin.x() + (widthcard / 2) - 15),(int) (coin.y() + (heigthcard / 2) - 15));
		graph.setPaint(new Color(0, 0, 0));
		graph.draw(new RoundRectangle2D.Double(coin.x(), coin.y(), widthcard, heigthcard, angle, angle));
	}
	// =====================================================================================================

	// Méthode pour attribuer des couleurs aux différentes types de ressources
	// ==============================================================================
	public void colortype(Graphics2D graph, String typec) {
		if (typec.equals("Insect")) {
			graph.setPaint(new Color(175, 5, 220));
		} else if (typec.equals("Fungi")) {
			graph.setPaint(new Color(220, 15, 15));
		} else if (typec.equals("Plant")) {
			graph.setPaint(new Color(50, 190, 0));
		} else if (typec.equals("Animal")) {
			graph.setPaint(new Color(70, 210, 250));
		}
	}
	// ==============================================================================

	// Méthode pour attribuer l'image aux differentes types de ressources
	// ==============================================================================
	public void drawtype(Graphics2D graph, int x, int y) {
		BufferedImage img = null;
		try (InputStream input = Coin.class.getResourceAsStream(type + ".png")) {
			img = ImageIO.read(input);
			graph.drawImage(img, x, y, 30, 30, null);
		} catch (Exception e) {
			colortype(graph, type);
			graph.fill(new Rectangle2D.Double(x, y, 30, 30));
		}
	}
	// ==============================================================================

	// Methode pour dessiner les coins qui ont été generer
	// ==================================================================================
	public void drawcoins(Graphics2D graph, ArrayList<Coin> lst, int x, int y,double widthcard,double heigthcard) {
		Objects.requireNonNull(lst);
		int ecart1 = (int) (heigthcard - (widthcard*0.15));
		int ecart2 = (int) (widthcard - (widthcard*0.15));
		drawcoin(graph, lst.get(0), x, y,(int) (widthcard*0.15));
		drawcoin(graph, lst.get(1), x + ecart2, y,(int) (widthcard*0.15));
		drawcoin(graph, lst.get(2), x + ecart2, y + ecart1,(int) (widthcard*0.15));
		drawcoin(graph, lst.get(3), x, y + ecart1,(int) (widthcard*0.15));
	}
	// ==================================================================================

	// Methode pour dessiner un coin (si il n'est pas invisible)
	// ==================================================================================
	public void drawcoin(Graphics2D graph, Coin coin, int x, int y,int widthcoin) {
		if (coin.type() != "Invisible") {
			coin.drawcoin(graph, false, x, y,widthcoin);
		}
	}
	// ==================================================================================

	// Methode pour dessiner les point que raporte la carte
	// ==================================================================================
	public void drawpoint(Graphics2D graph, int x, int y) {
		graph.setPaint(new Color(250, 241, 157));
		graph.setFont(new Font("Times Roman ", 0, 12));
		var w = drawcontour(graph, x, y);
		drawconditionpoint(graph, w, y);
		graph.setPaint(new Color(0, 0, 0));
		graph.drawString("" + pointg, w + 7, y + 14);
	}
	// ==================================================================================

	// Methode pour dessiner le contour des points
	// ================================================================================
	public int drawcontour(Graphics2D graph, int x, int y) {
		int w;
		int width;
		if (conditionpoint == "") {
			w = x + widthcard / 2 - 10;
			width = 20;
		} else {
			w = x + widthcard / 2 - 25;
			width = 50;
		}
		graph.fill(new Rectangle2D.Double(w, y, width, 20));
		graph.setColor(new Color(0, 0, 0));
		graph.draw(new Rectangle2D.Double(w, y, width, 20));
		return w;
	}
	// ================================================================================

	// Methode pour dessiner la contidion pour avoir des points
	// ================================================================================
	public void drawconditionpoint(Graphics2D graph, int x, int y) {
		if (conditionpoint != "") {
			graph.drawString("|", x + 22, y + 14);
			if (conditionpoint == "Coin") {
				drawconditioncoin(graph, x + 28, y + 4, 16);
			} else {
				drawimage(graph, conditionpoint, x + 30, y + 2, 16);
			}
		}
	}
	// ================================================================================

	// Methode pour dessiner la condition qui permet d'avoir des point en recouvrant
	// des points
	// ================================================================================
	public void drawconditioncoin(Graphics2D graph, int x, int y, int width) {
		graph.setColor(new Color(0, 0, 0));
		graph.draw(new Rectangle(x, y, width, (int) (width * 0.75)));
		graph.fillRect(x, y, 5, 5);
	}
	// ================================================================================

	// Methode pour dessiner les ressources necessaire a la pose de la carte
	// =============================================================================================
	public void drawressourcesnecessaire(Graphics2D graph, Coordinate p0, int width, int height) {
		Objects.requireNonNull(p0);
		var largeur = listeressnecessaire.length * 20;
		var w = p0.x() + (width / 2 - (largeur) / 2);
		var h = p0.y() + (height - 20);
		graph.setPaint(new Color(250, 241, 157));
		graph.fill(new Rectangle2D.Double(w, h, largeur, 20));
		drawressource(graph, new Coordinate(w, h));
		graph.setPaint(new Color(0, 0, 0));
		graph.draw(new Rectangle2D.Double(w, h, largeur, 20));
	}
	// =============================================================================================

	// Methode pour dessiner les images des ressources necessaire à la pose de la
	// carte
	// ==========================================================
	public void drawressource(Graphics2D graph, Coordinate p0) {
		int nb = 0;
		for (String typec : listeressnecessaire) {
			drawimage(graph, typec, p0.x() + 2 + 20 * nb, p0.y() + 2, 16);
			nb++;
		}
	}
	// ==========================================================

	// Methode pour dessiner une image en fonction du type de ressource
	// ===========================================================================
	public void drawimage(Graphics2D graph, String type, int x, int y, int width) {
		BufferedImage img = null;
		try (InputStream input = Coin.class.getResourceAsStream(type + ".png")) {
			img = ImageIO.read(input);
			graph.drawImage(img, x, y, width, width, null);
		} catch (Exception e) {
			colortype(graph, type);
			graph.fill(new Rectangle2D.Double(x, y, width, width));
		}
	}
	// ===========================================================================

	// Methode pour savoir si x appartient au carre
	// ===========================================================================
	private boolean xappartientcarre(double minx, double x, double maxx) {
		return (minx <= x && x <= maxx);
	}
	// ===========================================================================

	// Methode pour savoir si y appartient au carre
	// ===========================================================================
	private boolean yappartientcarre(double miny, double y, double maxy) {
		return (miny <= y && y <= maxy);
	}
	// ===========================================================================

	// Methode pour savoir si un point appartient a une carte
	// ==========================================================================================
	public boolean appartientrectangle(int i, int j, int x, int y) {
		return xappartientcarre(x, i, x + widthcard) && yappartientcarre(y, j, y + heigthcard);
	}
	// ==========================================================================================
}