const request = require('supertest');
const app = require('../server'); 

// Tek bir tanımlama yapıyoruz ve JSON serileştirme ile tarihleri string'e sabitliyoruz
const fallbackNotes = JSON.parse(JSON.stringify(require('../data/fallbackNotes')));

describe('Notes API Resilience Tests', () => {
    
    it('SITUATION: MongoDB disconnected - EXPECTATION: Return Fallback Data', async () => {
        const res = await request(app)
            .get('/api/notes')
            .set('x-test-disconnect', 'true'); // Route içindeki kontrolü tetikler

        expect(res.statusCode).toBe(200);
        
        // Body'yi stringify yaparak tarih formatı farklarını tamamen ortadan kaldırıyoruz
        expect(JSON.stringify(res.body)).toBe(JSON.stringify(fallbackNotes));
        
        console.log("✅ Resilience Test Passed: Handled disconnection gracefully.");
    });
});