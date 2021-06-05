CREATE TABLE `Part` (
  `partNo` INT NOT NULL AUTO_INCREMENT,
  `partName` VARCHAR(255) NULL,
  `partDescription` VARCHAR(255) NULL,
  `currentPrice` FLOAT NULL,
  `part_QOH` INT NULL,
PRIMARY KEY (`partNo`, `currentPrice`),
  UNIQUE INDEX `partNo_UNIQUE` (`partNo` ASC));
INSERT INTO `Part` (`partNo`, `partName`, `partDescription`, `currentPrice`, `part_QOH`) VALUES ('1', 'Gold 1/8 ounces', 'Refined gold from Peru', '78', '12'), ('2', 'Wood', 'Wood from my backyard', '7.99', '103');

CREATE TABLE `Client` (
  `clientCompId` VARCHAR(255) NOT NULL,
  `clientCompName` VARCHAR(255) NULL,
  `clientCity` VARCHAR(255) NULL,
  `clientCompPassword` VARCHAR(16) NULL,
  `moneyOwed` FLOAT NULL,
  PRIMARY KEY (`clientCompId`),
  UNIQUE INDEX `clientCompName_UNIQUE` (`clientCompName` ASC));
  INSERT INTO `Client` (`clientCompId`, `clientCompName`, `clientCity`, `clientCompPassword`, `moneyOwed`) VALUES ('CL#bf810574b9b7', 'Company A', 'Halifax', 'password', '0.00'), ('CL#4c5658248594', 'Company B', 'Moncton', 'password', '0.00');

CREATE TABLE `Purchase Order` (
  `poNo` VARCHAR(255) NOT NULL,
  `datePO` DATETIME NULL,
  `status` enum('Pending', 'Processed') NULL,
  `clientCompId` VARCHAR(255) NOT NULL,
  `poPrice` FLOAT NULL,
  PRIMARY KEY (`poNo`, `clientCompId`),
  INDEX `fk_Purchase Order_Client_idx` (`clientCompId` ASC),
  CONSTRAINT `fk_Purchase Order_Client`
    FOREIGN KEY (`clientCompId`)
    REFERENCES `Client` (`clientCompId`)
    ON DELETE NO ACTION /*For future trigger to be added*/
    ON UPDATE NO ACTION);
INSERT INTO `purchase order` (`poNo`, `datePO`, `status`, `clientCompId`) VALUES ('PO#fbaccce0bfd2', '2021-05-21 07:44:03', 'Pending', 'CL#4c5658248594'), ('PO#3bbed344c8f9', '2021-05-20 07:44:03', 'Pending', 'CL#bf810574b9b7');

CREATE TABLE `Line` (
  `lineNo` INT NOT NULL AUTO_INCREMENT,
  `poNo` VARCHAR(255) NOT NULL,
  `partNo` INT NOT NULL,
  `linePrice` FLOAT NULL,
  `lineUnit` INT NULL,
  PRIMARY KEY (`lineNo`, `poNo`),
  INDEX `fk_Line_Purchase Order1_idx` (`poNo` ASC),
  INDEX `fk_Line_Part1_idx` (`partNo` ASC),
  CONSTRAINT `fk_Line_Purchase Order1`
    FOREIGN KEY (`poNo`)
    REFERENCES `Purchase Order` (`poNo`),
  CONSTRAINT `fk_Line_Part1`
    FOREIGN KEY (`partNo` , `linePrice`)
    REFERENCES `Part` (`partNo` , `currentPrice`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

INSERT INTO `line` (`lineNo`, `poNo`, `partNo`, `linePrice`, `lineUnit`) VALUES ('1', 'PO#3bbed344c8f9', '1', '78', '5'), ('2', 'PO#3bbed344c8f9', '2', '7.99', '2');
ALTER TABLE `part`
  DROP PRIMARY KEY,
   ADD PRIMARY KEY(
     `partNo`,
     `currentPrice`);