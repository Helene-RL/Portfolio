package Game;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics2D;
import java.awt.geom.RoundRectangle2D;

public record Joueur(GameData data,GameView view) {

	
	public void draw(Graphics2D graph,int x,int y, int width, int height,int nb_joueur, int taille_police) {
		graph.setPaint(new Color(250, 241, 157));
		var rect = new RoundRectangle2D.Double(x,y,width,height, 16, 16);
		graph.fill(rect);
		graph.setPaint(new Color(0, 0, 0));
		graph.setFont(new Font("Times Roman", Font.BOLD, taille_police));
		graph.drawString("Joueur "+nb_joueur, x+5 ,y+20);
		graph.drawString("Score: "+data.info().score(), x+5 ,(int) (y+40));
		graph.draw(rect);
		
	}
}
