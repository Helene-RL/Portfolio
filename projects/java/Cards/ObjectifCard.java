package Cards;

//Import
import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics2D;
import java.awt.geom.*;
import java.awt.image.BufferedImage;
import java.io.InputStream;
import java.util.Objects;
//==========================================
import java.util.Random;

import javax.imageio.ImageIO;

import Sections.Area;
import Sections.Coordinate;
import Sections.InfoJoueur;

public class ObjectifCard implements Card {
	// Les attributs
	// ==========================================
	private final String type;
	private final int point;
	private final String conditiongagnepoint;
	private final String secondconditionpoint;
	// ==========================================

	// Constructeur pour créer une carte de depart
	// ==============================================================
	public ObjectifCard(String type, int point) {
		this.type = type;
		this.point = point;
		this.conditiongagnepoint = initconditionpoint();
		this.secondconditionpoint = intisecondconditionpoint(conditiongagnepoint);
	}
	// ==========================================

	// Renvoie le nombre de point que donne cette carte
	// ==============================================================
	public int point(Area area,InfoJoueur info, Coordinate coor) {
		return point;
	}
	// ==========================================

	// intialise la condition pour gagner des points
	// ==============================================================
	public String initconditionpoint() {
		String[] lst = { "position", "artefact", "ressource" };
		Random random = new Random();
		return lst[random.nextInt(lst.length)];
	}
	// ==========================================

	// intialise la seconde condition pour gagner des points
	// ==============================================================
	public String intisecondconditionpoint(String conditionpoint) {
		Random random = new Random();
		if (conditionpoint.equals("artefact")) {
			String[] lst = { "Quill", "Manuscript", "Inkwell", "All" };
			return lst[random.nextInt(lst.length)];
		}
		if (conditionpoint.equals("ressource")) {
			String[] lst = { "Insect", "Fungi", "Plant", "Animal" };
			return lst[random.nextInt(lst.length)];
		}
		if (conditionpoint.equals("position")) {
			String[] lst = { "DiagonalD", "DiagonalM", "HautD", "HautG", "BasD", "BasG" };
			return lst[random.nextInt(lst.length)];
		}
		return "";
	}
	// ==========================================

	// Méthode pour dessiner le recto d'une carte
	// =======================================================================================================
	public void drawCard(Graphics2D graph, Coordinate coin, double width, double height) {
		Objects.requireNonNull(graph);
		Objects.requireNonNull(coin);
		colortype(graph);
		graph.fill(new RoundRectangle2D.Double(coin.x(), coin.y(), width, height, angle, angle));
		graph.setPaint(new Color(0, 0, 0));
		drawpoint(graph, coin.x(), coin.y(), width, height);
		drawcondition(graph, coin.x() + (width - width / 1.4) / 2, coin.y() + height / 4, width / 1.4, height / 1.5);
		graph.draw(new RoundRectangle2D.Double(coin.x(), coin.y(), width, height, angle, angle));
	}
	// =======================================================================================================

	// Méthode pour dessiner une ressourcre sur un coin d'une carte
	// ==============================================================================
	public void drawImage(Graphics2D graph, int x, int y, int widthimg, String type) {
		BufferedImage img = null;
		// try catch Pour afficher afficher l'image de la ressources celon son type
		// (Animal, Fungi, etc ...)
		try (InputStream input = Coin.class.getResourceAsStream(type + ".png")) {
			img = ImageIO.read(input);
			graph.drawImage(img, x + 5, y + 5, widthimg, widthimg, null);
		} catch (Exception e) {
			colortype(graph);
			graph.fillRect(x + 7, y + 7, widthimg - 4, widthimg - 4);
		}
	}
	// ==============================================================================

	// Méthode pour dessiner les couleur d'une carte selon le type
	// =====================================================
	public void colortype(Graphics2D graph) {
		if (type == "Insect") {
			graph.setPaint(new Color(175, 5, 220));
		} else if (type == "Fungi") {
			graph.setPaint(new Color(220, 15, 15));
		} else if (type == "Plant") {
			graph.setPaint(new Color(50, 190, 0));
		} else if (type == "Animal") {
			graph.setPaint(new Color(70, 210, 250));
		} else {
			graph.setPaint(new Color(252, 233, 60));
		}
	}

	// Méthode pour dessiner les points d'une carte
	// ================================================================================================
	public void drawpoint(Graphics2D graph, int x, int y, double width, double heigth) {
		if (point > 0) {
			graph.setPaint(new Color(250, 241, 157));
			graph.fill(new Rectangle2D.Double(x + width / 2 - 10, y, width / 10, width / 10));
			graph.setPaint(new Color(0, 0, 0));
			graph.draw(new Rectangle2D.Double(x + width / 2 - 10, y, width / 10, width / 10));
			graph.setFont(new Font("Times Roman ", 0, 12));
			graph.drawString("" + point, (int) (x + width / 2 - 2), y + 13);
		}
	}
	// ================================================================================================

	// Méthode pour dessiner les conditions d'une carte
	// =======================================================================================================
	public void drawcondition(Graphics2D graph, double x, double y, double width, double height) {
		graph.draw(new RoundRectangle2D.Double(x, y, width, height, angle, angle));
		if (conditiongagnepoint.equals("ressource")) {
			drawressource(graph, (int) x, (int) y + 10, widthcard / 8, secondconditionpoint);
		}
		if (conditiongagnepoint.equals("artefact")) {
			drawartefact(graph, (int) x, (int) y + 20, widthcard / 8, secondconditionpoint);
		}
		if (conditiongagnepoint.equals("position")) {
			drawposition(graph, (int) x + 40, (int) y + 20, widthcard / 8, secondconditionpoint);
		}
	}
	// =======================================================================================================

	// Méthode pour dessiner les ressources
	// ==============================================================================
	public void drawressource(Graphics2D graph, int x, int y, int widthimg, String type) {
		drawImage(graph, (int) (x + 30), y, widthimg, type);
		drawImage(graph, (int) (x + 50 + widthimg), y, widthimg, type);
		drawImage(graph, (int) (x + 25 + widthimg), y + widthimg, widthimg, type);
	}
	// ==============================================================================

	// Méthode pour dessiner les artefacts
	// ==============================================================================
	public void drawartefact(Graphics2D graph, int x, int y, int widthimg, String type) {
		if (!type.equals("All")) {
			drawImage(graph, (int) (x + 30), y, widthimg, type);
			drawImage(graph, (int) (x + 50 + widthimg), y, widthimg, type);
		} else {
			drawImage(graph, (int) (x + 30), y, widthimg, "Quill");
			drawImage(graph, (int) (x + 40 + widthimg), y, widthimg, "Manuscript");
			drawImage(graph, (int) (x + 50 + widthimg * 2), y, widthimg, "Inkwell");
		}
	}
	// ==============================================================================

	// Méthode pour dessiner les schemas de position
	// "DiagonalD", "DiagonalM", "HautD", "HautG", "BasD", "BasG"
	// ==============================================================================
	public void drawposition(Graphics2D graph, int x, int y, int widthrect, String type) {
		if (type.equals("DiagonalD") || type.equals("DiagonalM")) {
			drawdiagonal(graph, x, y, widthrect, (int) (widthrect * 0.55), type);
		} else if (type.equals("BasD") || type.equals("BasG") || type.equals("HautD") || type.equals("HautG")) {
			drawdAutre(graph, x, y, widthrect, (int) (widthrect * 0.55), type);
		}
	}
	// ==============================================================================

	// Méthode pour dessiner les schemas de diagonals
	// ==============================================================================
	public void drawdiagonal(Graphics2D graph, int x, int y, int widthrect, int heightrect, String type) {
		graph.draw(new Rectangle2D.Double(x + widthrect - 5, y + heightrect - 5, widthrect, heightrect));
		if (type.equals("DiagonalD")) {
			graph.draw(new Rectangle2D.Double(x, y, widthrect, heightrect));
			graph.draw(new Rectangle2D.Double(x + widthrect * 2 - 10, y + heightrect * 2 - 10, widthrect, heightrect));
		} else if (type.equals("DiagonalM")) {
			graph.draw(new Rectangle2D.Double(x, y + heightrect * 2 - 10, widthrect, heightrect));
			graph.draw(new Rectangle2D.Double(x + widthrect * 2 - 10, y, widthrect, heightrect));
		}
	}
	// ==============================================================================

	// Méthode pour dessiner les autres schemas
	// ==============================================================================
	public void drawdAutre(Graphics2D graph, int x, int y, int widthrect, int heightrect, String type) {
		graph.draw(new Rectangle2D.Double(x + 20, y, widthrect, heightrect));
		graph.draw(new Rectangle2D.Double(x + 20, y + heightrect + 1, widthrect, heightrect));
		if (type.equals("BasD")) {
			graph.draw(new Rectangle2D.Double(x + 20 + widthrect - 5, y + heightrect * 2 - 5, widthrect, heightrect));
		} else if (type.equals("HautD")) {
			graph.draw(new Rectangle2D.Double(x + 20 + widthrect - 5, y - 5, widthrect, heightrect));
		} else if (type.equals("BasG")) {
			graph.draw(new Rectangle2D.Double(x, y + heightrect * 2 - 5, widthrect, heightrect));
		} else if (type.equals("HautG")) {
			graph.draw(new Rectangle2D.Double(x, y - 5, widthrect, heightrect));
		}
	}
	// ==============================================================================

	// renvoie la liste des coins de la carte (liste vide car c'est une carte
	// objectifs)
	// ===========================================================================
	public String[] listecoin() {
		String[] lst = {};
		return lst;
	}

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

	public String[] listeressnecessaire() {
		String[] lst = {};
		return lst;
	}

	public void retourner() {
	}

	public boolean face() {
		return false;
	}

}
