import dbConnect from "../../../utils/dbConnect";
import Note from "../../../models/Note"

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const notes = await Note.find({});
                // console.log(notes, '//////')
                res.status(200).json({ success: true, data: notes })
            } catch (error) {
                res.status(400).json({ success: false });
                console.log(error)
            }
            break;
        case 'POST':
            try {
                const note = await Note.create(req.body);
                // console.log(note, '/post')
                res.status(201).json({ success: true, data: note })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}