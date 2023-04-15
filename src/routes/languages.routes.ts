import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/db.connection";

export const languagesRouter = express.Router();

languagesRouter.use(express.json());

languagesRouter.get("/", async (_req: Request, res: Response) => {
    try {
        const languages = await collections.languages.find({}).toArray();

        res.status(200).send(languages);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

languagesRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;
    try {
        const query = { _id: new ObjectId(id) };
        const language = await collections.languages.findOne(query);

        if (language) {
            res.status(200).send(language);
        }
    } catch (error) {
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
});

languagesRouter.post("/", async (req: Request, res: Response) => {
    try {
        const newLanguage = req.body;
        const result = await collections.languages.insertOne(newLanguage);

        result
            ? res.status(201).send(`Successfully created a new language with id ${result.insertedId}`)
            : res.status(500).send("Failed to create a new languages.");
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
});

languagesRouter.put("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const updatedLanguage = req.body;
        const query = { _id: new ObjectId(id) };
        const result = await collections.languages.updateOne(query, { $set: updatedLanguage });

        result
            ? res.status(200).send(`Successfully updated language with id ${id}`)
            : res.status(304).send(`Language with id: ${id} not updated`);
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});

languagesRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.languages.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(`Successfully removed language with id ${id}`);
        } else if (!result) {
            res.status(400).send(`Failed to remove languages with id ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`Language with id ${id} does not exist`);
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});
