import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('instagram_country_only')
export class InstagramCountryOnlyEntity {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column({ type: 'varchar', nullable: false, unique: true })
  country: string;
}
