package Cards;

//Import
import java.awt.Color;
import java.awt.Graphics2D;
import java.awt.geom.*;
import java.awt.image.BufferedImage;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Objects;
import java.util.Random;
//==========================================

import javax.imageio.ImageIO;

import Sections.Area;
import Sections.Coordinate;
import Sections.InfoJoueur;

public class StarterCard implements Card {
	// Les attributs
	// ==========================================
	private String[] listecoin;
	private boolean face;
	// ==========================================

	// Constructeur pour créer une carte de depart
	// ==============================================================
	public StarterCard(boolean face) {
		listecoin = initlistecoin();
		this.face = face;
	}
	// ==========================================

	// Renvoie le nombre de point que donne cette carte (0)
	// ==============================================================
	public int point(Area area,InfoJoueur info, Coordinate coor) {
		return 0;
	}
	// ==========================================

	// Renvoie la liste des coins selon la face
	// ===============================================================
	public String[] listecoin() {
		if (face) {
			return listecoin;
		}
		String[] lst =  { "Empty", "Empty", "Empty", "Empty","Empty", "Empty", "Empty", "Empty"};
		int i =4;
		for (String type : listecoin) {
			lst[i]=type;
			i++;
		}
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
	// ======================
	public void retourner() {
		if (face) {
			face = false;
		} else {
			face = true;
		}
	}
	// ======================

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

	// Méthode pour dessiner une le verso ou le recto de la carte celon la face
	// =====================================================
	public void drawCard(Graphics2D graph, Coordinate coin, double width, double height) {
		Objects.requireNonNull(graph);
		Objects.requireNonNull(coin);
		if (face) {
			drawrecto(graph, coin, width, height);
		} else {
			drawverso(graph, coin, width, height);
		}
	}
	// =====================================================

	// Méthode pour dessiner le recto d'une carte
	// ====================================================
	public void drawrecto(Graphics2D graph, Coordinate coin0, double width, double heigth) {
		graph.setPaint(new Color(253, 247, 194));
		graph.fill(new RoundRectangle2D.Double(coin0.x(), coin0.y(), width, heigth, angle, angle));
		drawdecor(graph, coin0, width, heigth);
		drawcoins(graph, generercoins(), coin0.x(), coin0.y(), width, heigth);
		graph.draw(new RoundRectangle2D.Double(coin0.x(), coin0.y(), width, heigth, angle, angle));
	}
	// =======================================================================================================

	// Méthode pour dessiner le verso d'une carte
	// ========================================================
	public void drawverso(Graphics2D graph, Coordinate coin0, double width, double heigth) {
		graph.setPaint(new Color(253, 247, 194));
		graph.fill(new RoundRectangle2D.Double(coin0.x(), coin0.y(), width, heigth, angle, angle));
		drawdecorverso(graph,(int) (coin0.x()+width/2.4),(int) (coin0.y()+heigth/6),width/7,(width/7-9)*listecoin.length);
		drawcoins(graph, genereremptycoins(), coin0.x(), coin0.y(), width, heigth);
		graph.draw(new RoundRectangle2D.Double(coin0.x(), coin0.y(), width, heigth, angle, angle));
	}
	// =======================================================================================================

	// Méthode pour dessiner les decors sur la carte
	// ========================================================
	public void drawdecor(Graphics2D graph, Coordinate coin0, double width, double heigth) {
		int diameter = (int) (heigth / 5);
		int radius = diameter / 2;
		graph.setPaint(new Color(0, 0, 0));
		graph.draw(new Ellipse2D.Double((coin0.x() + width / 2) - radius, (coin0.y() + heigth / 2) - diameter - 7,
				diameter, diameter));
		graph.draw(new Ellipse2D.Double((coin0.x() + width / 2) + 7, (coin0.y() + heigth / 2) - radius, diameter,
				diameter));
		graph.draw(new Ellipse2D.Double((coin0.x() + width / 2) - radius, (coin0.y() + heigth / 2) + 7, diameter,
				diameter));
		graph.draw(new Ellipse2D.Double((coin0.x() + width / 2) - diameter - 7, (coin0.y() + heigth / 2) - radius,
				diameter, diameter));
	}
	// ======================================================================================

	// Méthode pour dessiner les decors sur la carte
	// ========================================================
	public void drawdecorverso(Graphics2D graph, int x, int y, double width, double height) {
		graph.setPaint(new Color(0, 0, 0));
		graph.draw(new RoundRectangle2D.Double(x, y, width, height,angle,angle));
		int i =0;
		for (String type: listecoin) {
			drawressource(graph,x,(int) (y+(width-10)*i),(int) (width-10),type);
			i++;
		}
	}
	// ======================================================================================

	// Méthode pour dessiner une ressourcre 
	// ==============================================================================
	public void drawressource(Graphics2D graph, int x, int y, int widthimg,String type) {
		BufferedImage img = null;
		// try catch Pour afficher afficher l'image de la ressources celon son type
		// (Animal, Fungi, etc ...)
		try (InputStream input = Coin.class.getResourceAsStream(type + ".png")) {
			img = ImageIO.read(input);
			graph.drawImage(img, x + 5, y+2, widthimg, widthimg, null);
		} catch (Exception e) {
			colortype(graph,type);
			graph.fillRect(x + 7, y+2 , widthimg - 4, widthimg - 4);
		}
	}
	// ==============================================================================

	// Méthode pour dessiner les coins d'une carte
	// ============================================
	public void drawcoins(Graphics2D graph, ArrayList<Coin> lst, int x, int y, double width, double heigth) {
		Objects.requireNonNull(graph);
		Objects.requireNonNull(lst);
		int ecart1 = (int) (heigth - (width * 0.15));
		int ecart2 = (int) (width - (width * 0.15));
		drawcoin(graph, lst.get(0), x, y, (int) (width * 0.15));
		drawcoin(graph, lst.get(1), x + ecart2, y, (int) (width * 0.15));
		drawcoin(graph, lst.get(2), x + ecart2, y + ecart1, (int) (width * 0.15));
		drawcoin(graph, lst.get(3), x, y + ecart1, (int) (width * 0.15));
	}
	// ==========================================================

	// Méthode pour dessiner les couleur d'une carte selon le type
	// =====================================================
	public void colortype(Graphics2D graph,String type) {
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

	// Méthode pour dessiner un coin d'une carte
	public void drawcoin(Graphics2D graph, Coin coin, int x, int y, int widthcoin) {
		Objects.requireNonNull(coin);
		if (coin.type() != "Invisible") {
			coin.drawcoin(graph, true, x, y, widthcoin);
		}
	}
	// ==========================================================

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
