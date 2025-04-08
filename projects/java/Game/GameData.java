package Game;

import Cards.Card;
import Cards.ObjectifCard;
import Sections.*;

/**
 * The SimpleGameData class stores all relevant pieces of information for the
 * game status.
 * 
 * @author vincent
 */
public class GameData {
	// numero du joueur
	private final int num_joueur;
	
	/* variable de contruction du jeu */
	private final Area area;
	private final MainJ mainjoueur;
	private final ObjectifPerso objectifperso;
	private final ObjectifCommun objectifcommun;
	private final PiocheRessource piocheR;
	private final PiocheDorer piocheD;
	private final InfoJoueur info;
 
	/* variable qui permettent de savoir quelle carte est selectionner */
	public Card card;
	/* variable qui permettent de savoir quelle carte objectif est choisi */
	private ObjectifCard cardobjectif;
	/* variable qui permettent de compter le nombre de tour */
	private int nb_action;

	public GameData(int num_joueur,ObjectifCommun objectifcommun,PiocheRessource piocheR,PiocheDorer piocheD) {
		this.num_joueur= num_joueur;
		this.info = new InfoJoueur();
		this.area = new Area(info);
		this.mainjoueur = new MainJ();
		this.objectifperso = new ObjectifPerso();
		this.objectifcommun = objectifcommun;
		this.piocheR = piocheR;
		this.piocheD = piocheD;
		card = null;
		cardobjectif = objectifperso.objectif1();
		nb_action = 0;
	}

	public int num_joueur() {
		return num_joueur;
	}
	
	public InfoJoueur info() {
		return info;
	}
	
	public Area area() {
		return area;
	}
	
	public MainJ mainjoueur() {
		return mainjoueur;
	}
	
	public ObjectifPerso objectifperso() {
		return objectifperso;
	}
	
	public ObjectifCommun objectifcommun() {
		return objectifcommun;
	}
	
	public PiocheRessource piocheR() {
		return piocheR;
	}
	
	public PiocheDorer piocheD() {
		return piocheD;
	}
	
	public int nb_action() {
		return nb_action;
	}
	public Card card() {
		return card;
	}
	public ObjectifCard cardobjectif() {
		return cardobjectif;
	}
	
	public void changCard(Card othercard) {
		card = othercard;
	}
	
	public void changCardObjectif(ObjectifCard othercard) {
		cardobjectif = othercard;
	}
	
	public void tourplusun() {
		nb_action++;
	}
	
	public void remetreazero() {
		nb_action=0;
	}
	
}