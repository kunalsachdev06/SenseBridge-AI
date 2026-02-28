"""
SenseBridge AI — Flask Backend
Mock API server for the SenseBridge AI accessibility engine.
"""

import os
import time
import json
from datetime import datetime
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app, origins=os.getenv('CORS_ORIGINS', '*').split(','))

API_VERSION = "1.0"


def make_response(data, success=True):
    """Create a structured JSON response."""
    return jsonify({
        "success": success,
        "data": data,
        "timestamp": datetime.utcnow().isoformat() + "Z",
        "version": API_VERSION
    })


def simulate_delay(seconds=1.5):
    """Simulate AI processing time."""
    time.sleep(seconds)


# ============================
# Health Check
# ============================
@app.route('/health', methods=['GET'])
def health():
    return make_response({
        "status": "healthy",
        "service": "SenseBridge AI API",
        "uptime": "active",
        "endpoints": [
            "/upload-image",
            "/speech-to-text",
            "/simplify-text",
            "/detect-crisis",
            "/translate"
        ]
    })


# ============================
# Image Upload & Description
# ============================
@app.route('/upload-image', methods=['POST'])
def upload_image():
    simulate_delay(1.5)
    return make_response({
        "description": "A person walking through a busy street market with colorful stalls selling fruits and vegetables. The scene is vibrant with natural sunlight filtering through overhead canopies.",
        "confidence": 0.94,
        "objects_detected": ["person", "market stall", "fruits", "vegetables", "sunlight", "canopy"],
        "scene_type": "outdoor market",
        "accessibility_note": "This image shows a lively marketplace scene that would benefit from audio narration for visually impaired users.",
        "crisis_check": {
            "is_crisis": False,
            "message": "No threats detected in this image."
        }
    })


# ============================
# Speech to Text
# ============================
@app.route('/speech-to-text', methods=['POST'])
def speech_to_text():
    simulate_delay(1.5)
    return make_response({
        "transcript": "Hello, welcome to SenseBridge AI. This system helps bridge accessibility gaps for visually impaired, hearing impaired, and learning impaired individuals across multiple languages.",
        "confidence": 0.97,
        "language_detected": "English",
        "duration_seconds": 6.8,
        "word_count": 24,
        "processing_model": "Whisper (simulated)"
    })


# ============================
# Simplify Text
# ============================
@app.route('/simplify-text', methods=['POST'])
def simplify_text():
    simulate_delay(1.5)
    data = request.get_json(silent=True) or {}
    original = data.get('text', 'The implementation of sophisticated neural network architectures facilitates the extraction of hierarchical feature representations from unstructured data modalities.')

    return make_response({
        "original": original,
        "simplified": "Smart computer programs can find important patterns in messy data. They do this by looking at the data in layers, learning simple things first, then more complex things.",
        "reading_level": "Grade 5",
        "complexity_reduction": "64%",
        "word_count_original": len(original.split()),
        "word_count_simplified": 29,
        "dyslexia_friendly": True
    })


# ============================
# Crisis Detection
# ============================
@app.route('/detect-crisis', methods=['POST'])
def detect_crisis():
    simulate_delay(2.0)
    return make_response({
        "is_crisis": True,
        "threat_type": "fire",
        "confidence": 0.91,
        "severity": "high",
        "recommended_actions": [
            "Evacuate the area immediately",
            "Call emergency services (112)",
            "Move to the nearest safe exit"
        ],
        "alerts_sent": {
            "visual": True,
            "audio": True,
            "multilingual": True,
            "languages_notified": ["English", "Hindi", "Marathi"]
        },
        "message": "FIRE DETECTED — Emergency protocols activated. Multi-language alerts dispatched."
    })


# ============================
# Translation
# ============================
@app.route('/translate', methods=['POST'])
def translate():
    simulate_delay(1.5)
    data = request.get_json(silent=True) or {}
    text = data.get('text', 'Accessibility is a fundamental human right.')
    target_lang = data.get('language', 'hi')

    translations = {
        'hi': {'text': 'सुलभता एक मौलिक मानव अधिकार है।', 'name': 'Hindi'},
        'ta': {'text': 'அணுகல்தன்மை ஒரு அடிப்படை மனித உரிமை.', 'name': 'Tamil'},
        'te': {'text': 'ప్రాప్యత ఒక ప్రాథమిక మానవ హక్కు.', 'name': 'Telugu'},
        'mr': {'text': 'सुलभता हा मूलभूत मानवी अधिकार आहे.', 'name': 'Marathi'},
        'en': {'text': text, 'name': 'English'},
    }

    result = translations.get(target_lang, translations['hi'])

    return make_response({
        "original": text,
        "translated": result['text'],
        "source_language": "English",
        "target_language": result['name'],
        "target_code": target_lang,
        "translation_model": "Translation API (simulated)"
    })


# ============================
# Run
# ============================
if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    debug = os.getenv('FLASK_DEBUG', 'true').lower() == 'true'
    app.run(host='0.0.0.0', port=port, debug=debug)
