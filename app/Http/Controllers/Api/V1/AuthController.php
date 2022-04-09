<?php
declare(strict_types=1);

namespace App\Http\Controllers\Api\V1;

use App\Http\Requests\Api\V1\LoginRequest;
use App\Http\Requests\Api\V1\RegisterRequest;
use App\Models\User;
use Illuminate\Contracts\Auth\Authenticatable;
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

    /**
     * @param LoginRequest $loginRequest
     * @return User|Authenticatable|void
     */
    public function login(LoginRequest $loginRequest)
    {
        // TODO add remember option
        if (Auth::attempt($loginRequest->validated()) && ($user = Auth::user())) {
            return $user;
        }
        abort(401);
    }

    /**
     * @return User|Authenticatable
     */
    public function user()
    {
        if ($user = Auth::user()) {
            return $user;
        }
        abort(401);
    }
}
