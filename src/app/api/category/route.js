import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

BigInt.prototype.toJSON = function () {
    return this.toString();
};

export async function POST() {
    try {
        const category = await prisma.category.create({
            data: {
                parentId: 1,
                title: "Blog",
                metaTitle: "This is Blog Data",
                slug: "/blog",
                context: "lorem ipsum",
            },
        });
        return NextResponse.json({ msg: "success", category }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function GET() {
    try {
        const category = await prisma.category.findMany();
        return NextResponse.json({ msg: "success", category });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function PUT() {
    try {
        const category = await prisma.category.update({
            where: { id: 2 },
            data: {
                title: "Modify title",
                metaTitle: "Meta Modify",
            },
        });
        return NextResponse.json({ msg: "success", category });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function DELETE() {
    try {
        const category = await prisma.category.delete({
            where: {
                id: 1,
            },
        });
        return NextResponse.json({ msg: "success", category });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}
