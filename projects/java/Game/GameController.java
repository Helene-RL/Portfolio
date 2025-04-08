package Game;

import java.awt.Color;
import java.awt.Font;
import java.util.LinkedHashMap;

import Cards.ObjectifCard;
import Sections.Area;
import Sections.Coordinate;
import Sections.MainJ;
import Sections.ObjectifCommun;
import Sections.ObjectifPerso;
import Sections.PiocheDorer;
import Sections.PiocheRessource;
import fr.umlv.zen5.Application;
import fr.umlv.zen5.ApplicationContext;
import fr.umlv.zen5.Event;
import fr.umlv.zen5.Event.Action;
import fr.umlv.zen5.KeyboardKey;

/**
 * The SimpleGameController class deals with the main game loop, including
 * retrieving raw user actions, sending them for analysis to the GameView and
 * GameData, and dealing with time events.
 * 
 * @author vincent
 */
public class GameController {
	private static int nb_tour = 0;

	/**
	 * Default constructor, which does basically nothing.
	 */
	public GameController() {
	}

	// main pour lancer le jeu
	public static void main(String[] args) {
		Application.run(new Color(253, 249, 212), GameController::codexnaturalis);
	}

	// boucle du jeu
	private static void codexnaturalis(ApplicationContext context) {
		var screenInfo = context.getScreenInfo();
		int width = (int) screenInfo.getWidth();
		int height = (int) screenInfo.getHeight();

		GameView.drawchoisirmode(context, width, height);
		String mode = choixmodejeu(context, width, height);

		if (mode.equals("Solo")) {
			Mode1joueur(context, width, height);
		} else if (mode.equals("Multijoueur")) {
			Modemultijoueur(context, width, height);
		}
	}

	// Methode qui permet de choisir le mode de jeu(solo ou mode multijoueur)
	public static String choixmodejeu(ApplicationContext context, int width, int height) {
		String valider = "";
		while (valider.isEmpty()) {
			var event = context.pollOrWaitEvent(10);
			if (event == null) {
				continue;
			}
			var action = event.getAction();
			if (action == Action.KEY_PRESSED) {
				context.exit(0);
			} else if (action == Action.POINTER_DOWN) {
				valider = actionvalidermode(context, event, width, height);
			}
		}
		return valider;
	}

	// Methode qui permet de savoir quel mode est choisi
	public static String actionvalidermode(ApplicationContext context, Event event, int width, int height) {
		Coordinate coor = obtenirCoordinateMouse(event, width, height);
		GameView.drawchoisirmode(context, width, height);
		return appartientboutonsmode(coor.x(), coor.y(), width, height);
	}

	// methode qui permet de savoir quelle bouton est choisi
	public static String appartientboutonsmode(int i, int j, int width, int height) {
		if (appartientrectangle(new Coordinate(i, j), new Coordinate((int) (width / 2.6), (int) (height / 3.5)),
				(int) (width / 5.5), (int) (height / 13))) {
			return "Solo";
		}
		if (appartientrectangle(new Coordinate(i, j), new Coordinate((int) (width / 2.6), (int) (height / 2)),
				(int) (width / 5.5), (int) (height / 13))) {
			return "Multijoueur";
		}
		return "";
	}

	// methode qui permet de lancer le mode Solo
	public static void Mode1joueur(ApplicationContext context, int width, int height) {
		var data = new GameData(1, new ObjectifCommun(), new PiocheRessource(), new PiocheDorer());
		var view = GameView.initGameGraphics(width, height, data);
		initialisationjeu(context, width, height, data, view);
		GameView.draw(context, data, view,new LinkedHashMap<Integer, Joueur>(),1);
		while (true) {
			var event = context.pollOrWaitEvent(10);
			if (event == null) {
				continue;
			}
			typeactionSolo(context, event, width, height, data, view);
		}
	}

	// methode qui permet de lancer le mode Multijoueur
	public static void Modemultijoueur(ApplicationContext context, int width, int height) {
		var tabjoueur = new LinkedHashMap<Integer, Joueur>();
		GameView.drawchoisirnbjoueur(context, width, height);
		int nb_joueur = choisirnbjoueur(context, width, height);
		initmodemultijoueur(context, width, height, nb_joueur, tabjoueur);
		GameView.draw(context, tabjoueur.get(1).data(), tabjoueur.get(1).view(),tabjoueur,1);
		int tour_avant_fin = nb_joueur;
		while (tour_avant_fin != 0) {
			var data = tabjoueur.get(1 + nb_tour % nb_joueur).data();
			if (data.nb_action() != 0 && (data.nb_action() % 2) == 0) {
				nb_tour++;
				data.remetreazero();
				GameView.draw(context, tabjoueur.get(1 + nb_tour % nb_joueur).data(),
						tabjoueur.get(1 + nb_tour % nb_joueur).view(),tabjoueur,1 + nb_tour % nb_joueur);
				if (tour_avant_fin != nb_joueur) {
					GameView.drawMessageFin(context, width, height);
				}
			}
			var event = context.pollOrWaitEvent(10);
			if (event == null) {
				continue;
			}
			tour_avant_fin -= typeactionMulti(context, event, width, height,
					tabjoueur.get(1 + nb_tour % nb_joueur).data(), tabjoueur.get(1 + nb_tour % nb_joueur).view(),
					tabjoueur, tour_avant_fin, nb_joueur,1 + nb_tour % nb_joueur);
		}
		GameView.drawFin(context, width, height, tabjoueur, max_scorejoueur(tabjoueur));
		Finclicker(context, width, height, tabjoueur);

	}

	// methode qui permet de lancer le mode Multijoueur
	public static void initmodemultijoueur(ApplicationContext context, int width, int height, int nb_joueur,
			LinkedHashMap<Integer, Joueur> tabjoueur) {
		ObjectifCommun objcommun = new ObjectifCommun();
		PiocheRessource piocheR = new PiocheRessource();
		PiocheDorer piocheD = new PiocheDorer();
		for (int i = 0; i < nb_joueur; i++) {
			var data = new GameData(i + 1, objcommun, piocheR, piocheD);
			var view = GameView.initGameGraphics(width, height, data);
			initialisationjeu(context, width, height, data, view);
			var joueur = new Joueur(data, view);
			tabjoueur.put(i + 1, joueur);
		}
	}

	// methode qui permet de savoir combien de joueur il y a
	public static int choisirnbjoueur(ApplicationContext context, int width, int height) {
		int nb_joueur = 0;
		while (nb_joueur == 0) {
			var event = context.pollOrWaitEvent(10);
			if (event == null) {
				continue;
			}
			var action = event.getAction();
			if (action == Action.KEY_PRESSED) {
				context.exit(0);
			} else if (action == Action.POINTER_DOWN) {
				nb_joueur = actionboutonsnbjoueur(context, event, width, height);
			}
		}
		return nb_joueur;
	}

	// methode qui permet de savoir quel bouton a été choisi
	public static int actionboutonsnbjoueur(ApplicationContext context, Event event, int width, int height) {
		Coordinate coor = obtenirCoordinateMouse(event, width, height);
		GameView.drawchoisirnbjoueur(context, width, height);
		return appartientboutonsnbjoueur(coor.x(), coor.y(), width, height);
	}

	// methode qui permet de savoir combien de joueur joue
	public static int appartientboutonsnbjoueur(int i, int j, int width, int height) {
		if (appartientrectangle(new Coordinate(i, j), new Coordinate((int) (width / 6), (int) (height / 2)),
				(int) (width / 5.5), (int) (height / 13))) {
			return 2;
		}
		if (appartientrectangle(new Coordinate(i, j), new Coordinate((int) (width / 2.6), (int) (height / 2)),
				(int) (width / 5.5), (int) (height / 13))) {
			return 3;
		}
		if (appartientrectangle(new Coordinate(i, j), new Coordinate((int) (width / 1.65), (int) (height / 2)),
				(int) (width / 5.5), (int) (height / 13))) {
			return 4;
		}
		return 0;
	}

	// Methode qui permet d'initialiser le jeu (choix du cater de la 1er carte,
	// choix de la carte objectif)
	public static void initialisationjeu(ApplicationContext context, int width, int height, GameData data,
			GameView view) {
		GameView.drawStart(context, data, view, width, height);
		ChoisirStartCard(context, width, height, data, view);
		GameView.drawchoisirobjectif(context, data, view, width, height);
		ChoisirObjectif(context, width, height, data, view);
	}

	// Methode qui permet de choisir le coter de la 1er carte
	public static void ChoisirStartCard(ApplicationContext context, int width, int height, GameData data,
			GameView view) {
		boolean valider = false;
		while (!valider) {
			var event = context.pollOrWaitEvent(10);
			if (event == null) {
				continue;
			}
			var action = event.getAction();
			if (action == Action.KEY_PRESSED) {
				context.exit(0);
			} else if (action == Action.POINTER_DOWN) {
				valider = actionStart(context, event, width, height, data, view);
			}
		}
	}

	// Methode qui permet de cliquer sur les boutons pour retourner la starCard ou
	// pour valider
	public static boolean actionStart(ApplicationContext context, Event event, int width, int height, GameData data,
			GameView view) {
		Coordinate coor = obtenirCoordinateMouse(event, width, height);
		appartientboutonretourner(coor.x(), coor.y(), width, height, data.area());
		GameView.drawStart(context, data, view, width, height);
		return appartientboutonValider(coor.x(), coor.y(), width, height, data);
	}

	// Methode qui permet de cliquer sur le bouton pour retourner la starCard
	public static void appartientboutonretourner(int i, int j, int width, int height, Area area) {
		if (appartientrectangle(new Coordinate(i, j),
				new Coordinate((int) (width - (width * 0.1)), (int) (height * 0.30)), (int) (width * 0.05),
				(int) (height * 0.07))) {
			area.retournerStarterCard();
		}
	}

	// Methode qui permet de savoir si le joueur à cliquer sur le bouton pour
	// valider la startcarte
	public static boolean appartientboutonValider(int i, int j, int width, int height, GameData data) {
		if (appartientrectangle(new Coordinate(i, j),
				new Coordinate((int) (width - (width * 0.1)), (int) (height * 0.36)), (int) (width * 0.09),
				(int) (height * 0.03))) {
			Coordinate coor = data.area().firstcoor();
			data.area().addemplacements(data.area().obtenircard(coor), coor);
			return true;
		}
		return false;
	}

	// Methode qui permet de choisir l'objectif personel
	public static void ChoisirObjectif(ApplicationContext context, int width, int height, GameData data,
			GameView view) {
		boolean valider = false;
		while (!valider) {
			var event = context.pollOrWaitEvent(10);
			if (event == null) {
				continue;
			}
			var action = event.getAction();
			if (action == Action.KEY_PRESSED) {
				context.exit(0);
			} else if (action == Action.POINTER_DOWN) {
				valider = actionObjectifPerso(context, event, width, height, data, view);
			}
		}
	}

	// Methode qui permet de choisir la carte objectif
	public static boolean actionObjectifPerso(ApplicationContext context, Event event, int width, int height,
			GameData data, GameView view) {
		Coordinate coor = obtenirCoordinateMouse(event, width, height);
		data.changCardObjectif(data.objectifperso().action(coor.x(), coor.y(), (int) (width / 2 - 100),
				(int) (height * 0.69 + 10), data.cardobjectif()));
		GameView.drawchoisirobjectif(context, data, view, width, height);
		return appartientboutonValider1(coor.x(), coor.y(), width, height, data.objectifperso(), data.cardobjectif());
	}

	// Methode qui permet de savoir si le joueur à cliquer sur le bouton pour
	// valider la carte objectif
	public static boolean appartientboutonValider1(int i, int j, int width, int height, ObjectifPerso objectifperso,
			ObjectifCard card) {
		if (appartientrectangle(new Coordinate(i, j),
				new Coordinate((int) (width - (width * 0.1)), (int) (height * 0.36)), (int) (width * 0.09),
				(int) (height * 0.03)) && card != null) {
			objectifperso.enleverautrecard(card);
			return true;
		}
		return false;
	}

	// Methode pour determiner quel est l'action effectuer dans le mode Solo
	public static void typeactionSolo(ApplicationContext context, Event event, int width, int heigth, GameData data,
			GameView view) {
		var action = event.getAction();
		if (action == Action.KEY_PRESSED) {
			actiondeplacer(context,event,data,view,new LinkedHashMap<Integer, Joueur>(),1);
			//context.exit(0);
		} else if (data.info().gagner()) {
			gagner(context, width, heigth, action);
			if (action == Action.POINTER_DOWN) {
				context.exit(0);
			}
		} else if (action == Action.POINTER_DOWN) {
			autreaction(context, event, width, heigth, data, view, 1, 1,new LinkedHashMap<Integer, Joueur>(),1);
		}
	}

	// Methode pour determiner quel est l'action effectuer dans le mode Multi
	public static int typeactionMulti(ApplicationContext context, Event event, int width, int heigth, GameData data,
			GameView view, LinkedHashMap<Integer, Joueur> mapjoueur, int tour_avant_fin, int nb_joueur,int num_joueur) {
		var action = event.getAction();
		if (action == Action.KEY_PRESSED) {
			actiondeplacer(context,event,data,view,mapjoueur,num_joueur);
			//context.exit(0);
		} else if (OneJoueurwin(mapjoueur)) {
			return 1;
		} else if (action == Action.POINTER_DOWN) {
			autreaction(context, event, width, heigth, data, view, tour_avant_fin, nb_joueur,mapjoueur,num_joueur);
		}
		return 0;
	}
	
	// Methode pour deplacer le plateau selon la touche utiliser
	public static void actiondeplacer(ApplicationContext context,Event event,GameData data,GameView view,LinkedHashMap<Integer, Joueur> mapjoueur, int num_joueur) {
		if (event.getKey().equals(KeyboardKey.RIGHT)) {
			data.area().deplaceplateau(10, 0);
			GameView.draw(context, data, view,mapjoueur,num_joueur);
		}
		else if (event.getKey().equals(KeyboardKey.LEFT)) {
			data.area().deplaceplateau(-10, 0);
			GameView.draw(context, data, view,mapjoueur,num_joueur);
		}
		else if (event.getKey().equals(KeyboardKey.DOWN)) {
			data.area().deplaceplateau(0, 10);
			GameView.draw(context, data, view,mapjoueur,num_joueur);
		}
		else if (event.getKey().equals(KeyboardKey.UP)) {
			data.area().deplaceplateau(0, -10);
			GameView.draw(context, data, view,mapjoueur,num_joueur);
		}
		else {
			context.exit(0);
		}
	}

	// Methode qui permet de choisir le coter de la 1er carte
	public static void Finclicker(ApplicationContext context, int width, int height,
			LinkedHashMap<Integer, Joueur> mapjoueur) {
		boolean valider = false;
		while (!valider) {
			var event = context.pollOrWaitEvent(10);
			if (event == null) {
				continue;
			}
			var action = event.getAction();
			if (action == Action.KEY_PRESSED) {
				context.exit(0);
			}
			GameView.drawFin(context, width, height, mapjoueur, max_scorejoueur(mapjoueur));
		}
	}

	// Methode pour savoir si un des joueurs gagne
	public static int max_scorejoueur(LinkedHashMap<Integer, Joueur> mapjoueur) {
		int max = 1;
		for (int nb : mapjoueur.keySet()) {
			if (mapjoueur.get(nb).data().info().score() > mapjoueur.get(max).data().info().score()) {
				max = nb;
			}
		}
		return max;
	}

	// Methode pour savoir si un des joueurs gagne
	public static boolean OneJoueurwin(LinkedHashMap<Integer, Joueur> mapjoueur) {
		for (int nb : mapjoueur.keySet()) {
			if (mapjoueur.get(nb).data().info().gagner()) {
				return true;
			}
		}
		return false;
	}

	// methode pour afficher que le joueur a gagner
	public static void gagner(ApplicationContext context, int width, int heigth, Action action) {
		context.renderFrame(graphics -> {
			graphics.setColor(new Color(242, 0, 0));
			graphics.setFont(new Font("Times Roman", Font.BOLD, 40));
			graphics.drawString("Vous avez gagner", (int) (width * 0.4), (int) (heigth * 0.5));
		});
	}

	// Methode pour recuperer les coordonnées de l'endroit ou le joueur a cliquer,
	// faire l'action et dessiner le changement
	public static void autreaction(ApplicationContext context, Event event, int width, int height, GameData data,
			GameView view, int tour_avant_fin, int nb_joueur,LinkedHashMap<Integer, Joueur> mapjoueur,int num_joueur) {
		Coordinate coor = obtenirCoordinateMouse(event, width, height);
		clicker(coor.x(), coor.y(), width, height, data);
		GameView.draw(context, data, view,mapjoueur,num_joueur);
		if (tour_avant_fin != nb_joueur) {
			GameView.drawMessageFin(context, width, height);
		}
	}

	// Methode qui permet de faire des actions en fonction du tour
	private static void clicker(int i, int j, int width, int height, GameData data) {
		if (data.nb_action() % 2 == 0) {
			actiontourposer(i, j, width, height, data);
		} else if (data.nb_action() % 2 == 1) {
			actiontourpiocher(i, j, width, height, data);
		}
	}

	// Methode qui permet de poser une si c'est le tour où on pose
	public static void actiontourposer(int i, int j, int width, int height, GameData data) {
		if (appartientrectangle(new Coordinate(i, j), new Coordinate(10, 10), (int) (width * 0.72 - 10),
				(int) (height * 0.69 - 10))) {
			data.changCard(data.area().action(i, j, data.card(), data.mainjoueur(), data));
		}
		if (appartientrectangle(new Coordinate(i, j), new Coordinate(10, (int) (height * 0.69 + 20)),
				(int) (width / 2 - 150), (int) (height * 0.25))) {
			data.changCard(data.mainjoueur().action(i, j, 10, (int) (height * 0.69 + 40), data));
		}
		appartientbouton1(i, j, width, height, data.mainjoueur());
	}

	// Methode qui permet de cliquer sur le bouton pour retourner les cartes
	public static void appartientbouton1(int i, int j, int width, int height, MainJ mainjoueur) {
		if (appartientrectangle(new Coordinate(i, j),
				new Coordinate((int) (width - (width * 0.1)), (int) (height * 0.30)), (int) (width * 0.09),
				(int) (height * 0.07))) {
			mainjoueur.retourner();
		}
	}

	// Methode qui permet de piocher dans une des pioches
	public static void actiontourpiocher(int i, int j, int width, int height, GameData data) {
		if (appartientrectangle(new Coordinate(i, j), new Coordinate((int) (width * 0.72 + 20), 10),
				(int) (width / 6.5), (int) (height * 0.53))) {
			data.changCard(data.piocheR().action(i, j, (int) (width * 0.72 + 45), 40, data.mainjoueur(), data));
		}
		if (appartientrectangle(new Coordinate(i, j),
				new Coordinate((int) (width * 0.72 + 20), (int) (height * 0.53 + 20)), (int) (width / 6.5),
				(int) (height * 0.44))) {
			data.changCard(data.piocheD().action(i, j, (int) (width * 0.72 + 45), (int) (height / 2 + 40),
					data.mainjoueur(), data));
		}
	}

	// Methode qui permet de savoir si les Coordonnées son correcte
	private static void checkRange(double min, double value, double max) {
		if (value < min || value > max) {
			throw new IllegalArgumentException("Invalid coordinate: " + value);
		}
	}

	// Methode qui permet d'obtenir les coordonnées du click de la souris
	public static Coordinate obtenirCoordinateMouse(Event event, int width, int height) {
		var location = event.getLocation();
		int i = (int) location.x;
		int j = (int) location.y;
		checkRange(0, i, width);
		checkRange(0, j, height);
		return new Coordinate(i, j);
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

}