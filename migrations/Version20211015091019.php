<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20211015091019 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE description_competences ADD description_id INT NOT NULL');
        $this->addSql('ALTER TABLE description_competences ADD CONSTRAINT FK_37FC693FD9F966B FOREIGN KEY (description_id) REFERENCES competences (id)');
        $this->addSql('CREATE INDEX IDX_37FC693FD9F966B ON description_competences (description_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE description_competences DROP FOREIGN KEY FK_37FC693FD9F966B');
        $this->addSql('DROP INDEX IDX_37FC693FD9F966B ON description_competences');
        $this->addSql('ALTER TABLE description_competences DROP description_id');
    }
}
