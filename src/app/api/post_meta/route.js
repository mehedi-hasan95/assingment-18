import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

BigInt.prototype.toJSON = function () {
    return this.toString();
};

export async function POST(req, res) {
    try {
        const postMeta = await prisma.post_meta.create({
            data: {
                key: "test",
                context: "lorem ipsum",
                postId: 3,
            },
        });
        return NextResponse.json({ msg: "success", postMeta });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function GET() {
    try {
        const post_meta = await prisma.post_meta.findMany();
        return NextResponse.json({ msg: "success", post_meta });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function PUT() {
    try {
        const post_meta = await prisma.post_meta.update({
            where: { id: 2 },
            data: {
                key: "modify key",
            },
        });
        return NextResponse.json({ msg: "success", post_meta });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function DELETE() {
    try {
        const post_meta = await prisma.post_meta.delete({
            where: {
                id: 2,
            },
        });
        return NextResponse.json({ msg: "success", post_meta });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}
