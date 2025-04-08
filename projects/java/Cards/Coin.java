package Cards;

// Import
//======================================
import java.awt.Color;
import java.awt.Graphics2D;
import java.awt.geom.RoundRectangle2D;
import java.awt.image.BufferedImage;
import java.io.InputStream;
import java.util.Objects;
import javax.imageio.ImageIO;
//======================================


public record Coin(String type) {
	
	// Méthode pour dessiner les coins
	//==============================================================================
	public void drawcoin(Graphics2D graph, boolean typecarte, int x, int y,int widthcoin) {
		// Verification que l'objet graph n'est pas null
		Objects.requireNonNull(graph);
		
		// Définit la couleur de fond du coint avec une couleur jaune clair
		graph.setPaint(new Color(250, 241, 157));
		
		graph.fill(new RoundRectangle2D.Double(x, y, widthcoin, widthcoin, 8, 8));
		if (typecarte) {
			graph.setPaint(new Color(0, 0, 0));
		} else {
			graph.setPaint(new Color(236, 222, 48));
		}
		graph.draw(new RoundRectangle2D.Double(x, y, widthcoin, widthcoin, 8, 8));
		if (type != "Empty") {
			drawressource(graph, x, y,(int) (widthcoin*0.7));
		}
	}
	
	//==============================================================================
	
	
	
	// Méthode pour dessiner une ressourcre sur un coin d'une carte
	//==============================================================================
	public void drawressource(Graphics2D graph, int x, int y,int widthimg) {
		BufferedImage img = null;
		//try catch Pour afficher afficher l'image de la ressources celon son type (Animal, Fungi, etc ...)
		try(InputStream input = Coin.class.getResourceAsStream(type+".png")){
			img = ImageIO.read(input);
			graph.drawImage(img,x+5, y+5,widthimg,widthimg,null);
		}
		catch(Exception e){
			ressourcecolor(graph);
			graph.fillRect(x+7, y+7, widthimg-4, widthimg-4);
		}
	}
	//==============================================================================


	
	
	// Méthode pour attribuer des couleurs aux différentes types de ressources
	//==============================================================================
	public void ressourcecolor(Graphics2D graph) {
	    // Si le type est "Insecte"
	    if (type.equals("Insect")) {
	        graph.setPaint(new Color(175, 5, 220)); // Violet
	    }
	    // Si le type est "Fungi" (champignon)
	    else if (type.equals("Fungi")) {
	        graph.setPaint(new Color(220, 15, 15)); // Rouge
	    }
	    // Si le type est "Plante"
	    else if (type.equals("Plant")) {
	        graph.setPaint(new Color(50, 190, 0)); // Vert
	    }
	    // Si le type est "Animal"
	    else if (type.equals("Animal")) {
	        graph.setPaint(new Color(70, 210, 250)); // Bleu clair
	    }
	    // Si le type est "Quill" (plume)
	    else if (type.equals("Quill")) {
	        graph.setPaint(new Color(250, 230, 60)); // Jaune
	    }
	    // Si le type est "Manuscript"
	    else if (type.equals("Manuscript")) {
	        graph.setPaint(new Color(253, 233, 60)); // Jaune clair
	    }
	    // Si le type est "Inkwell" (encrier)
	    else if (type.equals("Inkwell")) {
	        graph.setPaint(new Color(255, 235, 60)); // Jaune vif
	    }
	}
	//==============================================================================

	
}
