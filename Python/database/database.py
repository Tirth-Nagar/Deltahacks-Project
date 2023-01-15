import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


def init_database():
    #initialize the database
    cred = credentials.Certificate("Python\database\deltahacks-project-45cfa-firebase-adminsdk-tm41x-65ad7340b2.json")
    firebase_admin.initialize_app(cred)

def retrieve_data():
    #Reading from the database
    db = firestore.client()
    doc = db.collection(u'Clients').document(u'Client_1') 
    if doc.get().exists:
        data = doc.get().to_dict()
    print(data)
        

def update_data(field, updateData):
    #Writing to the database
    db = firestore.client()
    doc = db.collection(u'Clients').document(u'Client_1') 
    if doc.get().exists:
        data = doc.get().to_dict()
        doc.update({field: updateData})
    else:
        print("No such document!")
