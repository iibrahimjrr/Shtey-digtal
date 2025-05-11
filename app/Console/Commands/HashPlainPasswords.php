<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;
use App\Models\Patient;

class HashPlainPasswords extends Command
{
    protected $signature = 'patients:hash-passwords';

    protected $description = 'Hash all plain-text passwords for patients that are not bcrypt-encrypted.';

    public function handle()
    {
        $patients = Patient::all();
        $updated = 0;

        foreach ($patients as $patient) {
            
            if (strlen($patient->password) < 60 || !preg_match('/^\$2[ayb]\$.{56}$/', $patient->password)) {
                $patient->password = Hash::make($patient->password);
                $patient->save();
                $updated++;
            }
        }

        $this->info(" تم تحديث $updated باسورد غير مشفر.");
        return Command::SUCCESS;
    }
}
