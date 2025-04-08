package Sections;

public record Coordinate(int x, int y) {
	
	// Méthode pour comparer deux coordonnées
	// ========================================
	public boolean equals(Coordinate o) {
		return o.x == this.x && o.y == this.y;
	}
	// ========================================
}
