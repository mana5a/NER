# import spacy 
# from spacy import displacy
# from collections import Counter 
# import en_core_web_sm
# nlp=en_core_web_sm.load()

# #str='Interest in fuzzy systems was sparked by Seiji Yasunobu and Soji Miyamoto of Hitachi, who in 1985 provided simulations that demonstrated the feasibility of fuzzy control systems for the Sendai Subway'
# doc=nlp(str)
# def ner():
#     print([(X.text,X.label_) for X in doc.ents])
#     return [(X.text,X.label_) for X in doc.ents]

# #ner()

import spacy 
from spacy import displacy
from collections import Counter 
import en_core_web_sm
nlp=en_core_web_sm.load()
import pandas as pd 
file=pd.read_csv('placement.csv',skiprows=[0,-1],usecols=[2,3])
df=pd.DataFrame(file)

data=[]
for i in range (0, len(df)):
    obj=dict()
    obj['question']=str(df['question'][i])
    obj['answer']=str(df['answer'][i])
    data.append(obj)

def ner():
    tags=[]
    for i in range(0, len(data)):
        doc = nlp(data[i]['question'])
        for ent in doc.ents: 
            #print(type(ent.label_),ent.label_)
            if(str(ent.label_)==str('CARDINAL') or str(ent.label_)==str('ORDINAL')):
                #print(ent.text, ent.label_) 
                pass                
            else:
                print(ent.text, ent.label_) 
                tags.append((ent.text,ent.label_))
                
    return (list(set(tags)))

