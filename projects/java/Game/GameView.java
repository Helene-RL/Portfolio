package Game;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics2D;
import java.awt.geom.Rectangle2D;
import java.awt.geom.RoundRectangle2D;
import java.util.LinkedHashMap;
import java.util.Objects;

import Sections.Coordinate;
import Sections.Section;
import fr.umlv.zen5.ApplicationContext;

/**
 * The SimpleGameView class deals with the display of the game the screen, and
 * with the interpretation of which zones were clicked on by the user.
 * 
 * @author vincent
 * @param xOrigin    Abscissa of the left-hand corner of the area displaying the
 *                   game. Abscissas are counted from left to right.
 * @param yOrigin    Ordinate of the left-hand corner of the area displaying the
 *                   game. Ordinates are counted from top to bottom.
 * @param height     Height of the (square) area displaying the game.
 * @param width      Width of the (square) area displaying the game.
 * @param squareSize Side of the (square) areas displaying individual cells /
 *                   images.
 * @param loader     ImageLoader that dealt with loading the pictures to be
 *                   memorized.
 *
 */
public record GameView(int width, int height, GameData data) {

	// width: largeur de la fenetre
	// height: hauteur de la fenetre
	// data: donnée du joueur

	public static GameView initGameGraphics(int width, int height, GameData data) {
		Objects.requireNonNull(data);
		return new GameView(width, height, data);
	}

	// Methode pour dessiner le jeu
	public static void draw(ApplicationContext context, GameData data, GameView view,LinkedHashMap<Integer, Joueur> mapjoueur, int num_joueur) {
		context.renderFrame(graphics -> view.draw(graphics, data,mapjoueur,num_joueur)); // do not modify
	}

	// Methode pour dessiner le jeu
	private void draw(Graphics2D graphics, GameData data,LinkedHashMap<Integer, Joueur> mapjoueur, int num_joueur) {
		drawPlateau(graphics, data, width, height);
		if (data.nb_action() % 2 == 0) {
			drawbouton1(graphics);
		}
		drawinfoautrejoueur(graphics, new Coordinate((int) (width - (width * 0.1)),(int) (height-((mapjoueur.size()-1)*(width * 0.05)))), (int) (width * 0.09),
				(int) (height * 0.05), mapjoueur, num_joueur);
	}

	// Methode pour dessiner le plateau de jeu
	public static void drawPlateau(Graphics2D graphics, GameData data, int width, int height) {
		graphics.clearRect(0, 0, width, height);
		drawSection(data.area(), graphics, new Coordinate(10, 10), (int) (width * 0.72 - 7), (int) (height * 0.69 - 10),
				data);
		drawSection(data.mainjoueur(), graphics, new Coordinate(10, (int) (height * 0.69 + 10)),
				(int) (width / 2 - 110), (int) (height * 0.29), data);
		drawSection(data.objectifperso(), graphics, new Coordinate((int) (width / 2 - 100), (int) (height * 0.69 + 10)),
				(int) (Section.widthcard + 20), (int) (height * 0.29), data);
		drawSection(data.objectifcommun(), graphics,
				new Coordinate((int) (width / 2 - 100 + Section.widthcard + 20), (int) (height * 0.69 + 10)),
				(int) (Section.widthcard + 20), (int) (height * 0.29), data);
		drawSection(data.piocheR(), graphics, new Coordinate((int) (width * 0.72 + 20), 10), (int) (width / 6.5),
				(int) (height * 0.49), data);
		drawSection(data.piocheD(), graphics, new Coordinate((int) (width * 0.72 + 20), (int) (height * 0.49 + 20)),
				(int) (width / 6.5), (int) (height * 0.48), data);
		drawSection(data.info(), graphics, new Coordinate((int) (width - (width * 0.1)), 10), (int) (width * 0.09),
				(int) (height * 0.25), data);
		graphics.setFont(new Font("Times Roman", Font.BOLD, 25));
		graphics.drawString("Joueur " + data.num_joueur(), (int) (20), (int) (40));
	}

	// Methode pour dessiner le bouton qui permet de retourner les cartes
	public void drawbouton1(Graphics2D graph) {
		var rect = new Rectangle2D.Double(width - (width * 0.1), height * 0.30, width * 0.09, height * 0.07);
		graph.draw(rect);
		graph.setPaint(new Color(0, 0, 0));
		graph.setFont(new Font("Times Roman", Font.BOLD, 15));
		graph.drawString("Retourner toutes", (int) (width - (width * 0.095)), (int) (height * 0.32));
		graph.drawString("les cartes de", (int) (width - (width * 0.095)), (int) (height * 0.34));
		graph.drawString("la main", (int) (width - (width * 0.095)), (int) (height * 0.36));
	}

	// Methode pour dessiner le jeu quand on doit choisir le coter de la
	// startedCard(donc avec les bouton pour valider ou retourner la carte)
	public static void drawStart(ApplicationContext context, GameData data, GameView view, int width, int height) {
		context.renderFrame(graphics -> {
			drawPlateau(graphics, data, width, height);
			graphics.setFont(new Font("Times Roman", Font.BOLD, 30));
			graphics.drawString("Choisir le coter de la 1er carte", width / 4, 40);
			drawboutonStart(graphics, width, height);
			drawboutonvalider(graphics, width, height);
		});
	}

	// Methode pour dessiner le bouton qui permet de retourner les cartes
	public static void drawboutonStart(Graphics2D graph, int width, int height) {
		graph.draw(new Rectangle2D.Double(width - (width * 0.1), height * 0.30, width * 0.09, height * 0.05));
		graph.setPaint(new Color(0, 0, 0));
		graph.setFont(new Font("Times Roman", Font.BOLD, 15));
		graph.drawString("Retourner la", (int) (width - (width * 0.095)), (int) (height * 0.32));
		graph.drawString("StarteCart", (int) (width - (width * 0.095)), (int) (height * 0.34));
	}

	// Methode pour dessiner le bouton qui permet de valider la face de la startCard
	public static void drawboutonvalider(Graphics2D graph, int width, int height) {
		graph.draw(new Rectangle2D.Double(width - (width * 0.1), height * 0.36, width * 0.09, height * 0.03));
		graph.setPaint(new Color(0, 0, 0));
		graph.setFont(new Font("Times Roman", Font.BOLD, 15));
		graph.drawString("Valider", (int) (width - (width * 0.075)), (int) (height * 0.38));
	}

	// Methode pour dessiner le jeu quand on doit choisir la carte objectif (donc
	// avec le bouton pour valider son choix)
	public static void drawchoisirobjectif(ApplicationContext context, GameData data, GameView view, int width,
			int height) {
		context.renderFrame(graphics -> {
			drawPlateau(graphics, data, width, height);
			graphics.setFont(new Font("Times Roman", Font.BOLD, 30));
			graphics.drawString("Choisir la carte objectif", width / 4, 40);
			drawboutonvalider(graphics, width, height);
		});
	}

	// methode pour dessiner le menu pour choisir son mode
	public static void drawchoisirmode(ApplicationContext context, int width, int height) {
		context.renderFrame(graphics -> {
			graphics.clearRect(0, 0, width, height);
			graphics.setFont(new Font("Times Roman", Font.BOLD, 30));
			graphics.drawString("Choisir le mode de jeu", (int) (width / 2.7), 50);
			drawboutons(graphics, width, height);
		});
	}

	// Methode pour dessiner le bouton qui permet de valider le mode
	public static void drawboutons(Graphics2D graph, int width, int height) {
		graph.draw(new RoundRectangle2D.Double(width / 2.6, height / 3.5, width / 5.5, height / 13, 16, 16));
		graph.setPaint(new Color(0, 0, 0));
		graph.setFont(new Font("Times Roman", Font.BOLD, 30));
		graph.drawString("Mode 1 joueur", (int) (width / 2.5), (int) (height / 2.95));
		graph.draw(new RoundRectangle2D.Double(width / 2.6, height / 2, width / 5.5, height / 13, 16, 16));
		graph.drawString("Mode multijoueur", (int) (width / 2.5), (int) (height / 1.81));
	}

	// methode pour dessiner le menu pour choisir le nombre de joueur
	public static void drawchoisirnbjoueur(ApplicationContext context, int width, int height) {
		context.renderFrame(graphics -> {
			graphics.clearRect(0, 0, width, height);
			graphics.setFont(new Font("Times Roman", Font.BOLD, 30));
			graphics.drawString("Choisir le nombre de joueur", (int) (width / 2.7), (int) height / 5);
			drawboutonsnbjoueur(graphics, width, height);
		});
	}

	// Methode pour dessiner le bouton qui permet de valider le nombre de joueur
	public static void drawboutonsnbjoueur(Graphics2D graph, int width, int height) {
		graph.draw(new RoundRectangle2D.Double(width / 6, height / 2, width / 5.5, height / 13, 16, 16));
		graph.setPaint(new Color(0, 0, 0));
		graph.setFont(new Font("Times Roman", Font.BOLD, 30));
		graph.drawString("2 joueurs", (int) (width / 4.7), (int) (height / 1.81));
		graph.draw(new RoundRectangle2D.Double(width / 2.6, height / 2, width / 5.5, height / 13, 16, 16));
		graph.drawString("3 joueurs", (int) (width / 2.3), (int) (height / 1.81));
		graph.draw(new RoundRectangle2D.Double(width / 1.65, height / 2, width / 5.5, height / 13, 16, 16));
		graph.drawString("4 joueurs", (int) (width / 1.53), (int) (height / 1.81));
	}

	// Methode pour dessiner chaque section du plateau
	public static void drawSection(Section sect, Graphics2D graphics, Coordinate coin, int width, int height,
			GameData data) {
		sect.draw(graphics, coin, width, height, data);
	}

	// methode pour dessiner l'affichage de la fin
	public static void drawFin(ApplicationContext context, int width, int height,
			LinkedHashMap<Integer, Joueur> mapjoueur, int max_joueur) {
		context.renderFrame(graphics -> {
			graphics.clearRect(0, 0, width, height);
			graphics.setPaint(new Color(0, 0, 0));
			graphics.setFont(new Font("Times Roman", Font.BOLD, 30));
			graphics.drawString("Fin du jeu, voici le gagnant:", (int) (width / 2.7), 50);
			int i = 0;
			for (int num_joueur : mapjoueur.keySet()) {
				if (num_joueur == max_joueur) {
					mapjoueur.get(num_joueur).draw(graphics, (int) (width / 2.5), height / 4, (int) (width / 5.5),
							height / 7, num_joueur,30);
				} else {
					mapjoueur.get(num_joueur).draw(graphics, (int) (width / 6 + (width / 5.5 + 10) * i), height / 2,
							(int) (width / 5.5), height / 7, num_joueur,30);
					i++;
				}
			}
		});
	}

	// Methode pour afficher le message de fin
	public static void drawMessageFin(ApplicationContext context, int width, int height) {
		context.renderFrame(graphics -> {
			graphics.setFont(new Font("Times Roman", Font.BOLD, 30));
			graphics.drawString("Dernier tour", (int) (width / 2.7), 50);
		});
	}

	// Mthode pour dessiner les info des autres joueurs
	public void drawinfoautrejoueur(Graphics2D graph, Coordinate coor, int width, int height,
			LinkedHashMap<Integer, Joueur> mapjoueur, int num_joueur_d) {
		var i = 0;
		for (int num_joueur : mapjoueur.keySet()) {
			if (num_joueur != num_joueur_d) {
				mapjoueur.get(num_joueur).draw(graph, coor.x(), coor.y()+(height+10)*i, width, height, num_joueur,15);
				i++;
			}
		}
	}
}