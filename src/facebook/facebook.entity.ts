import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('country_only')
export class FacebookCountryOnlyEntity {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column({ type: 'varchar', nullable: false, unique: true })
  country: string;
}
