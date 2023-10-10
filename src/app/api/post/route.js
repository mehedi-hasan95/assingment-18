import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

BigInt.prototype.toJSON = function () {
    return this.toString();
};

export async function POST() {
    try {
        const post = await prisma.post.create({
            data: {
                parentId: 1,
                title: "1st Post",
                metaTitle: "This is first post",
                slug: "post1",
                summary: "abcdef",
                context: "lorem ipsum",
                published: "yes",
            },
        });
        return NextResponse.json({ msg: "success", post }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function GET() {
    try {
        const post = await prisma.post.findMany();
        return NextResponse.json({ msg: "success", post });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function PUT() {
    try {
        const post = await prisma.post.update({
            where: { id: 2 },
            data: {
                title: "Modify title",
                metaTitle: "Meta Modify",
            },
        });
        return NextResponse.json({ msg: "success", post });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function DELETE() {
    try {
        const post = await prisma.post.delete({
            where: {
                id: 1,
            },
        });
        return NextResponse.json({ msg: "success", post });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}
