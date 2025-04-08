package Cards;

// Import
//====================================
import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics2D;
import java.awt.geom.Rectangle2D;
import java.awt.geom.RoundRectangle2D;
import java.awt.image.BufferedImage;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Objects;
import java.util.Random;
import javax.imageio.ImageIO;
//====================================

import Sections.Area;
import Sections.Coordinate;
import Sections.InfoJoueur;

public class RessourceCard implements Card {

	// Les attributs
	// ==========================================
	private final int pointg;
	private final String type; 
	private final String[] listecoin;
	private boolean face;
	// ==========================================

	// Constructeur pour créer une carte de ressource
	// ==============================================================
	public RessourceCard(String type, int pointg, boolean face) {
		Objects.requireNonNull(type);
		this.type = type;
		this.pointg = pointg;
		this.listecoin = initlistecoin();
		this.face = face;
	}
	// ==============================================================

	public String toString() {
		return "RessourceCard: " +type+" ,"+pointg+" ,"+listecoin+" ,"+face;
	}
	
	// Méthode qui definit les points que donne une carte
	// ====================================================
	public int point(Area area,InfoJoueur info, Coordinate coor) {
		return pointg;
	}
	// ====================================================

	// Renvoie la liste des coins selon la face
	// ===============================================================
	public String[] listecoin() {
		if (face) {
			return listecoin;
		}
		String[] lst = { "Empty", "Empty", "Empty", "Empty", type };
		return lst;
	}
	// ===============================================================

	// Renvoie la liste des ressources necessaire a la pose de la carte
	// ===============================================================
	public String[] listeressnecessaire() {
		String[] lst = {};
		return lst;
	}
	// ===============================================================

	// Renvoie la face de la carte
	// ======================
	public boolean face() {
		return face;
	}
	// ======================

	// Méthode pour retourner et afficher verso ou recto d'une carte
	// ===========================
	public void retourner() {
		if (face) {
			face = false;
		} else {
			face = true;
		}
	}
	// ===========================

	// Methode pour initialier la liste des coins du recto
	public String[] initlistecoin() {
		String[] lst = new String[4];
		Random random = new Random();
		for (int i = 0; i < 4; i++) {
			int value = random.nextInt(tab.length);
			lst[i] = tab[value];
		}
		return lst;
	}

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

	// Méthode pour generer des coins vide du verso
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

	// Méthode pour dessiner une le verso ou le recto de la carte celon la face
	// =====================================================
	public void drawCard(Graphics2D graph, Coordinate coin,double width,double height) {
		Objects.requireNonNull(graph);
		Objects.requireNonNull(coin);
		if (face) {
			drawrecto(graph, coin,width,height);
		} else {
			drawverso(graph, coin,width,height);
		}
	}
	// =====================================================

	// Méthode pour dessiner le recto d'une carte
	// =======================================================================================================
	public void drawrecto(Graphics2D graph, Coordinate coin0,double width,double heigth) {
		colortype(graph);
		graph.fill(new RoundRectangle2D.Double(coin0.x(), coin0.y(), width, heigth, angle, angle));
		graph.setColor(new Color(0, 0, 0));
		drawpoint(graph, coin0.x(), coin0.y(),width,heigth);
		drawcoins(graph, generercoins(), coin0.x(), coin0.y(),width,heigth);
		graph.draw(new RoundRectangle2D.Double(coin0.x(), coin0.y(),width, heigth, angle, angle));
	}
	// =======================================================================================================

	// Méthode pour dessiner le verso d'une carte
	// ========================================================================================================
	public void drawverso(Graphics2D graph, Coordinate coin,double width,double heigth) {
		colortype(graph);
		graph.fill(new RoundRectangle2D.Double(coin.x(), coin.y(), width, heigth, angle, angle));
		graph.setColor(new Color(0, 0, 0));
		drawtype(graph,(int) (coin.x() + (width / 2) - 15),(int) (coin.y() + (heigth / 2) - 15));
		drawcoins(graph, genereremptycoins(), coin.x(), coin.y(),width,heigth);
		graph.draw(new RoundRectangle2D.Double(coin.x(), coin.y(), width, heigth, angle, angle));
	}
	// ========================================================================================================

	// Méthode pour dessiner les couleur d'une carte selon le type
	// =====================================================
	public void colortype(Graphics2D graph) {
		if (type.equals("Insect")) {
			graph.setPaint(new Color(175, 5, 220));
		} else if (type.equals("Fungi")) {
			graph.setPaint(new Color(220, 15, 15));
		} else if (type.equals("Plant")) {
			graph.setPaint(new Color(50, 190, 0));
		} else if (type.equals("Animal")) {
			graph.setPaint(new Color(70, 210, 250));
		} else {
			graph.setPaint(new Color(252, 233, 60));
		}
	}
	// =====================================================

	// Méthode pour dessiner une carte avec le type
	// ======================================================================================
	public void drawtype(Graphics2D graph, int x, int y) {
		BufferedImage img = null;
		try (InputStream input = Coin.class.getResourceAsStream(type + ".png")) {
			img = ImageIO.read(input);
			graph.drawImage(img, x, y, 30, 30, null);
		} catch (Exception e) {
			colortype(graph);
			graph.fill(new Rectangle2D.Double(x, y, 30, 30));
		}
	}
	// ======================================================================================

	// Méthode pour dessiner les coins d'une carte
	// ================================================================================================
	public void drawcoins(Graphics2D graph, ArrayList<Coin> lst, int x, int y,double width,double heigth) {
		Objects.requireNonNull(lst);
		int ecart1 = (int) (heigth- (width*0.15));
		int ecart2 = (int) (width- (width*0.15));
		drawcoin(graph, lst.get(0), x, y,(int) (width*0.15));
		drawcoin(graph, lst.get(1), x + ecart2, y,(int) (width*0.15));
		drawcoin(graph, lst.get(2), x + ecart2, y + ecart1,(int) (width*0.15));
		drawcoin(graph, lst.get(3), x, y + ecart1,(int) (width*0.15));
	}

	// Méthode pour dessiner un coin d'une carte
	// -----------------------------------------------------------------------------------------------
	public void drawcoin(Graphics2D graph, Coin coin, int x, int y,int widthcoin) {
		Objects.requireNonNull(coin);
		if (coin.type() != "Invisible") {
			coin.drawcoin(graph, true, x, y,widthcoin);
		}
	}
	// ================================================================================================

	// Méthode pour dessiner le point d'une carte
	// ================================================================================================
	public void drawpoint(Graphics2D graph, int x, int y,double width,double heigth) {
		if (pointg > 0) {
			graph.setPaint(new Color(250, 241, 157));
			graph.fill(new Rectangle2D.Double(x + width / 2 - 10, y, width/10, width/10));
			graph.setPaint(new Color(0, 0, 0));
			graph.draw(new Rectangle2D.Double(x + width/ 2 - 10, y, width/10, width/10));
			graph.setFont(new Font("Times Roman ", 0, 12));
			graph.drawString("" + pointg, (int) (x + width / 2 - 2), y + 13);
		}
	}
	// ================================================================================================

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
