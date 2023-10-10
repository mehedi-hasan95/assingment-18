import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

BigInt.prototype.toJSON = function () {
    return this.toString();
};

export async function POST(req, res) {
    try {
        const post_comment = await prisma.post_comment.create({
            data: {
                postId: 4,
                parentId: 2,
                title: "fist comment",
                published: "yes",
                content: "fist comment",
            },
        });
        return NextResponse.json({ msg: "success", post_comment });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function GET() {
    try {
        const post_comment = await prisma.post_comment.findMany();
        return NextResponse.json({ msg: "success", post_comment });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function PUT() {
    try {
        const post_comment = await prisma.post_comment.update({
            where: { id: 3 },
            data: {
                title: "modify title",
            },
        });
        return NextResponse.json({ msg: "success", post_comment });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function DELETE() {
    try {
        const post_comment = await prisma.post_comment.delete({
            where: {
                id: 2,
            },
        });
        return NextResponse.json({ msg: "success", post_comment });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}
