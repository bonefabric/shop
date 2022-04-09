<?php
declare(strict_types=1);

namespace App\Http\Controllers\Api\V1;

use App\Http\Requests\Api\V1\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends ApiV1Controller
{

    /**
     * @param RegisterRequest $registerRequest
     * @return User
     */
    public function register(RegisterRequest $registerRequest): User
    {
        $user = User::create($registerRequest->validated());
        Auth::login($user);
        return $user;
    }
}
