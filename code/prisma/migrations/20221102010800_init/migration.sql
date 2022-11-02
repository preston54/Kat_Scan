-- CreateTable
CREATE TABLE `Users` (
    `FirstName` VARCHAR(255) NOT NULL,
    `LastName` VARCHAR(255) NOT NULL,
    `Password` VARCHAR(255) NOT NULL,
    `Email` VARCHAR(255) NOT NULL,
    `UserName` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Email_UNIQUE`(`Email`),
    UNIQUE INDEX `Users_Email_Password_key`(`Email`, `Password`),
    PRIMARY KEY (`UserName`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
