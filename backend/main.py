from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_methods=["*"],
    allow_headers=["*"],
)

class InputPanen(BaseModel):
    lahan: float
    tanaman: str

@app.post("/predict")
async def hitung_panen(data: InputPanen):
    yield_data = {
        "padi": 5,
        "jagung": 4,
        "cabai": 1.5,
        "singkong": 20
    }

    luas_ha = data.lahan / 10000
    hasil_ton = luas_ha * yield_data.get(data.tanaman, 0)
    
    return {
        "hasil": f"{hasil_ton:.2f} ton",
        "pesan": f"Mantap! Untuk lahan {data.lahan}m², estimasi panen {data.tanaman} kamu mencapai {hasil_ton:.2f} ton."
    }