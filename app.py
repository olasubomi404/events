from flask import Flask, render_template, request, jsonify

app = Flask(__name__, template_folder="/Users/olasubomi/Desktop/event_scheduler/templates")

events = []  # Store events in-memory; replace with a database in a production environment

@app.route('/')
def index():
    return render_template('/Users/olasubomi/Desktop/event_scheduler/templates/index.html')

@app.route('/add_event', methods=['POST'])
def add_event():
    data = request.json
    events.append(data)
    return jsonify({'success': True})

@app.route('/get_events', methods=['GET'])
def get_events():
    return jsonify(events)

if __name__ == '__main__':
    app.run(debug=True)
