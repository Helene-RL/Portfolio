package sae_java;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics2D;
import java.awt.geom.Rectangle2D;
import java.util.Objects;
import fr.umlv.zen5.Application;
import fr.umlv.zen5.ApplicationContext;
import fr.umlv.zen5.Event;
import fr.umlv.zen5.Event.Action;

public class Game {
	/* variable de contruction du jeu */
	private static Area area;
	private static MainJ mainjoueur;
	private static PiocheRessource piocheR;
	private static PiocheDorer piocheD;
	private static InfoJoueur info;

	/* variable qui permettent de savoir quelle carte est selectionner */
	public static Card card;
	/* variable qui permettent de compter le nombre de tour */
	public static int nb_tour;

	public Game() {
		this.info = new InfoJoueur();
		this.area = new Area(info);
		this.mainjoueur = new MainJ();
		this.piocheR = new PiocheRessource();
		this.piocheD = new PiocheDorer();
		this.card = null;
		this.nb_tour = 0;
	}

	// Methode pour dessiner le plateau de jeu
	public void drawjeu(ApplicationContext context, int width, int heigth) {
		Objects.requireNonNull(context);
		context.renderFrame(graphics -> {
			graphics.clearRect(0,0,width,heigth);
			area.drawArea(graphics, (int) (width * 0.72 - 10), (int) (heigth * 0.69 - 10));
			mainjoueur.drawMainJ(graphics, width, heigth, 10, (int) (heigth * 0.69 + 40));
			piocheR.drawpiocheR(graphics, width, heigth, (int) (width * 0.72 + 45), 40);
			piocheD.drawpiocheD(graphics, width, heigth, (int) (width * 0.72 + 45), (int) (heigth / 2 + 40));
			info.drawInfoJ(graphics, width, heigth);
			if (nb_tour % 2 == 0) {
				drawbouton1(graphics, width, heigth);
			}
		});
	}
	
	// Methode pour dessiner le bouton qui permet de retourner les cartes
	public void drawbouton1(Graphics2D graph, int width, int heigth) {
		var rect = new Rectangle2D.Double(width - (width * 0.1), heigth * 0.30, width * 0.09, heigth * 0.07);
		graph.draw(rect);
		graph.setPaint(new Color(0, 0, 0));
		graph.setFont(new Font("Times Roman", Font.BOLD, 15));
		graph.drawString("Retourner toutes", (int) (width - (width * 0.095)), (int) (heigth * 0.32));
		graph.drawString("les cartes de", (int) (width - (width * 0.095)), (int) (heigth * 0.34));
		graph.drawString("la main", (int) (width - (width * 0.095)), (int) (heigth * 0.36));
	}
	
	// Methode pour savoir si x appartient au carre
	private static boolean xappartientcarre(int minx, int x, int maxx) {
		return (minx <= x && x <= maxx);
	}
	
	// Methode pour savoir si y appartient au carre
	private static boolean yappartientcarre(int miny, int y, int maxy) {
		return (miny <= y && y <= maxy);
	}
	
	// Methode pour savoir si un point appartient a une carte
	private static boolean appartientrectangle(Coordinate pointcliquer, Coordinate point, int width, int height) {
		return xappartientcarre(point.x(), pointcliquer.x(), point.x() + width)
				&& yappartientcarre(point.y(), pointcliquer.y(), point.y() + height);
	}

	private static void checkRange(double min, double value, double max) {
		if (value < min || value > max) {
			throw new IllegalArgumentException("Invalid coordinate: " + value);
		}
	}
	
	// Methode qui permet de faire des actions en fonction du tour
	private static void clicker(int i, int j, int width, int heigth) {
		if (nb_tour % 2 == 0) {
			actiontourposer(i, j, width, heigth);
		} else if (nb_tour % 2 == 1) {
			actiontourpiocher(i, j, width, heigth);
		}
	}
	
	// Methode qui permet de poser une si c'est le tour où on pose
	public static void actiontourposer(int i, int j, int width, int heigth) {
		if (appartientrectangle(new Coordinate(i, j), new Coordinate(10, 10), (int) (width * 0.72 - 10),
				(int) (heigth * 0.69 - 10))) {
			card = area.action(i, j, card, info, mainjoueur);
		}
		if (appartientrectangle(new Coordinate(i, j), new Coordinate(10, (int) (heigth * 0.69 + 20)),
				(int) (width / 2 - 150), (int) (heigth * 0.25))) {
			card = mainjoueur.action(i, j, 10, (int) (heigth * 0.69 + 40));
		}
		appartientbouton1(i, j, width, heigth);
	}
	
	// Methode qui permet de cliquer sur le bouton poiur retourner les cartes
	public static void appartientbouton1(int i, int j, int width, int heigth) {
		if (appartientrectangle(new Coordinate(i, j),
				new Coordinate((int) (width - (width * 0.1)), (int) (heigth * 0.30)), (int) (width * 0.09),
				(int) (heigth * 0.07))) {
			mainjoueur.retourner();
		}
	}
	
	// Methode qui permet de piocher dans une des pioches
	public static void actiontourpiocher(int i, int j, int width, int heigth) {
		if (appartientrectangle(new Coordinate(i, j), new Coordinate((int) (width * 0.72 + 20), 10),
				(int) (width / 6.5), (int) (heigth * 0.53))) {
			card = piocheR.action(i, j, (int) (width * 0.72 + 45), 40, mainjoueur);
		}
		if (appartientrectangle(new Coordinate(i, j),
				new Coordinate((int) (width * 0.72 + 20), (int) (heigth * 0.53 + 20)), (int) (width / 6.5),
				(int) (heigth * 0.44))) {
			card = piocheD.action(i, j, (int) (width * 0.72 + 45), (int) (heigth / 2 + 40), mainjoueur);
		}
	}
	
	// Methode pour determiner quelle est l'action effectuer
	public static void typeaction(ApplicationContext context, Event event, int width, int heigth, Game jeu) {
		var action = event.getAction();
		if (action == Action.KEY_PRESSED) {
			context.exit(0);
		} else if (info.gagner()) {
			gagner(context, width, heigth, action);
			if (action == Action.POINTER_DOWN) {
				context.exit(0);
			}
		} else if (action == Action.POINTER_DOWN) {
			autreaction(context, event, width, heigth, jeu);
		}
	}
	
	// methode pour afficher que le joueur a gagner
	public static void gagner(ApplicationContext context, int width, int heigth, Action action) {
		context.renderFrame(graphics -> {
			graphics.setColor(new Color(242, 0, 0));
			graphics.setFont(new Font("Times Roman", Font.BOLD, 40));
			graphics.drawString("Vous avez gagner", (int) (width * 0.4), (int) (heigth * 0.5));
		});
	}
	
	// Methode pour recuperer les coordonnées de l'endroit ou le joueur a cliquer, faire l'action et dessiner le changement
	public static void autreaction(ApplicationContext context, Event event, int width, int heigth, Game jeu) {
		var location = event.getLocation();
		int i = (int) location.x;
		int j = (int) location.y;
		checkRange(0, i, width);
		checkRange(0, j, heigth);
		clicker(i, j, width, heigth);
		jeu.drawjeu(context, width, heigth);
	}
	
	// boucle principale
	public static void main(String[] args) {
		Application.run(new Color(253, 249, 212), context -> {
			var screenInfo = context.getScreenInfo();
			int width = (int) screenInfo.getWidth();
			int heigth = (int) screenInfo.getHeight();
			var jeu = new Game();
			jeu.drawjeu(context, width, heigth);
			while (true) {
				var event = context.pollOrWaitEvent(10);
				if (event == null) {
					continue;
				}
				typeaction(context, event, width, heigth, jeu);
			}
		});
	}
}
