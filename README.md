# Life Simulator

Life simulator is exactly what you think it is - a simple simulation game where you can be anybody you want for approximately 80 years, give or take. You can visit the doctor's office, go on vacation, or get drunk and pass out in a gutter! The game is simple and offers good replayability. So, what are you waiting for? Play today, no sign-up required!

### Current Status

```
Pre-Alpha
```

Currently, Life Simulator is in pre-alpha stage. The only way to play is to download this repository and run the application using **Flask**. For those few who would like to do this, instructions are below.

### Screenshots

The current new game screen.
![New Game Screen](https://github.com/thenicknash/simulation-web-game/tree/master/images/Life Simulator Screenshot 1 Pre-Alpha.png)

The current home screen.
![Home Screen](https://github.com/thenicknash/simulation-web-game/tree/master/images/Life Simulator Screenshot 2 Pre-Alpha.png)

The current career screen.
![Career Screen](https://github.com/thenicknash/simulation-web-game/tree/master/images/Life Simulator Screenshot 3 Pre-Alpha.png)

There are more pictures to come as development continues!

### Instructions for current download

1. Ensure Python is installed on your machine. To do this open your command line/terminal and enter `python --version`. You should see something like: `Python 3.6.0`. If not, head over to [python.org](https://www.python.org/downloads/) and download which ever version of Python 3 you desire.
2. Download Flask. Super simple instructions are found [here](http://flask.pocoo.org/).
3. Download this repository onto your local machine.
4. Once downloaded, navigate into the application's root directory.
5. In the terminal, enter `cd application`.
6. If you are running a Unix/Linux machine, enter `export FLASK_DEBUG=1` followed by `export FLASK_APP=app.py`. If you are running a windows machine, enter `set FLASK_DEBUG=1` followed by `set FLASK_APP=app.py`.
7. Enter `flask run`.
8. Voila! You can now highlight the local server URL, copy it, and paste into your browser of choice. The URL will most likely be http://127.0.0.1:5000/, but if it is not, no worries! Happy gaming!

### Miscellaneous

If you have any suggestions, would like to add a feature, or have a complaint, email me at nicknashdev@gmail.com or simply make a pull request!
