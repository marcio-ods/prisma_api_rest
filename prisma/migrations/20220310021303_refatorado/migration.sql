-- CreateTable
CREATE TABLE "broker" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_fk" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "CNPJ" TEXT,
    "site" TEXT,
    "contact" TEXT,
    CONSTRAINT "broker_user_fk_fkey" FOREIGN KEY ("user_fk") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "movement" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "broker_fk" INTEGER NOT NULL,
    "operation_type" TEXT NOT NULL,
    "asset_fk" INTEGER NOT NULL,
    "trading_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "settlement_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "brokerage_note_fk" INTEGER,
    CONSTRAINT "movement_broker_fk_fkey" FOREIGN KEY ("broker_fk") REFERENCES "broker" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "movement_brokerage_note_fk_fkey" FOREIGN KEY ("brokerage_note_fk") REFERENCES "brokerage_note" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "movement_asset_fk_fkey" FOREIGN KEY ("asset_fk") REFERENCES "asset" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "brokerage_note" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "number" TEXT NOT NULL,
    "note_operation_fk" INTEGER NOT NULL,
    CONSTRAINT "brokerage_note_note_operation_fk_fkey" FOREIGN KEY ("note_operation_fk") REFERENCES "note_operation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "note_operation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quatity" INTEGER NOT NULL,
    "unit_price" TEXT NOT NULL,
    "market_fk" INTEGER NOT NULL,
    CONSTRAINT "note_operation_market_fk_fkey" FOREIGN KEY ("market_fk") REFERENCES "market" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "asset" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT,
    "CNPJ" TEXT,
    "target_price" TEXT,
    "description" TEXT,
    "asset_class" TEXT
);

-- CreateTable
CREATE TABLE "fees" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "description" TEXT,
    "brokerage_note_fk" INTEGER NOT NULL,
    CONSTRAINT "fees_brokerage_note_fk_fkey" FOREIGN KEY ("brokerage_note_fk") REFERENCES "brokerage_note" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "market" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT
);

-- CreateTable
CREATE TABLE "system-labels" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "asset_fk" INTEGER,
    "movement_fk" INTEGER,
    "column" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    CONSTRAINT "system-labels_movement_fk_fkey" FOREIGN KEY ("movement_fk") REFERENCES "movement" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "system-labels_asset_fk_fkey" FOREIGN KEY ("asset_fk") REFERENCES "asset" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "user-labels" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_fk" INTEGER NOT NULL,
    "asset_fk" INTEGER,
    "column" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    CONSTRAINT "user-labels_user_fk_fkey" FOREIGN KEY ("user_fk") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "user-labels_asset_fk_fkey" FOREIGN KEY ("asset_fk") REFERENCES "asset" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "system-labels_hash_key" ON "system-labels"("hash");

-- CreateIndex
CREATE UNIQUE INDEX "user-labels_hash_key" ON "user-labels"("hash");
