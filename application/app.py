# =========================================================
# Import all of the necessary packages
# =========================================================
from flask import Flask, render_template, url_for
from werkzeug.routing import BaseConverter


# =========================================================
# "app" acts as the start of the Flask app
# =========================================================
app = Flask(__name__)


# =========================================================
# Below is the routing for the entire web application
# =========================================================


# =========================================================
# The new game page
# =========================================================
@app.route( '/' )
def new_game_page():
    return render_template( 'new-game.html' ), 404

# =========================================================
# The Intro page
# =========================================================
@app.route( '/intro' )
def intro_page():
    return render_template( 'intro.html' ), 404

# =========================================================
# Game home page (mood and recent events)
# =========================================================
@app.route( '/game/home' )
def game_home_page():
    return render_template( 'game-home.html' ), 404

# =========================================================
# Game career page
# =========================================================
@app.route( '/game/career' )
def game_career_page():
    return render_template( 'game-career.html' ), 404

# =========================================================
# Game relationships page
# =========================================================
@app.route( '/game/relationships' )
def game_relationships_page():
    return render_template( 'game-relationships.html' ), 404

# =========================================================
# Game news page
# =========================================================
@app.route( '/game/news' )
def game_news_page():
    return render_template( 'game-news.html' ), 404