from flask import Flask, render_template

app = Flask(__name__)

@app.route('/signup')
def signup():
    return render_template('signup.html')
@app.route('/login')
def login():
    return render_template('login.html')
@app.route('/forgot')
def forgot():
    return render_template('forgot.html')
@app.route('/viewDiagnoseImage')
def viewDiagnoseImage():
    return render_template('viewDiagnoseImage.html')
@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')
@app.route('/diagnosis')
def diagnosis():
    return render_template('diagnosis.html')
@app.route('/viewReport')
def viewReport():
    return render_template('viewReport.html')
@app.route('/purchasePlan')
def purchasePlan():
    return render_template('purchasePlan.html')
if __name__ == '__main__':
    app.run(debug=True)