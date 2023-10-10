import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

BigInt.prototype.toJSON = function () {
    return this.toString();
};

export async function POST(req, res) {
    try {
        const post_tag = await prisma.post_tag.create({
            data: {
                postId: 4,
                tagId: 3,
            },
        });
        return NextResponse.json({ msg: "success", post_tag });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function GET() {
    try {
        const post_tag = await prisma.post_tag.findMany();
        return NextResponse.json({ msg: "success", post_tag });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function PUT() {
    try {
        const post_tag = await prisma.post_tag.update({
            where: { id: 3 },
            data: {
                tagId: 4,
            },
        });
        return NextResponse.json({ msg: "success", post_tag });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function DELETE() {
    try {
        const post_tag = await prisma.post_tag.delete({
            where: {
                id: 4,
            },
        });
        return NextResponse.json({ msg: "success", post_tag });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}
