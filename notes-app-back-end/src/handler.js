const { nanoId } = require('nanoid');
const notes = require('./notes');

const addNoteHandler = (request, h) => {
    const { title, tags, body } = request.payload;

    const id = nanoId(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newNote = {
        title, tags, body, id, createdAt, updatedAt
    };

    notes.push(newNote);

    const isSuccess = notes.filter((note) => note.id === id).length > 0;

    if(isSuccess){
        const response = h.response({
            status: 'success',
            message: 'catatan berhasil di tambahkan',
            data: {
                noteId: id,
            }
        });
        response.code(201);
        return response;
    }

    const response = h.response({
        status: 'fail',
        message: 'catatan gagal di tambahkan'
    });

    response.code(500);
    return response;
};

module.exports = { addNoteHandler };