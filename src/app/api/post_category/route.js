import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

BigInt.prototype.toJSON = function () {
    return this.toString();
};

export async function POST(req, res) {
    try {
        const postCat = await prisma.post_category.create({
            data: {
                postId: 2,
                categoryId: 2,
            },
        });
        return NextResponse.json({ msg: "success", postCat }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function GET() {
    try {
        const post_category = await prisma.post_category.findMany();
        return NextResponse.json({ msg: "success", post_category });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function PUT() {
    try {
        const post_category = await prisma.post_category.update({
            where: { id: 2 },
            data: {
                categoryId: 4,
            },
        });
        return NextResponse.json({ msg: "success", post_category });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function DELETE() {
    try {
        const post_category = await prisma.post_category.delete({
            where: {
                id: 2,
            },
        });
        return NextResponse.json({ msg: "success", post_category });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}
